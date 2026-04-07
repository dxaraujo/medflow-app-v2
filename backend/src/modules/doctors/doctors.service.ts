import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from './schemas/doctor.schema';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { QueryDoctorDto } from './dto/query-doctor.dto';
import { PaginatedResponseDto } from '../../common/dto/paginated-response.dto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<DoctorDocument> {
    const existingCrm = await this.doctorModel.findOne({
      crm: createDoctorDto.crm,
    });
    if (existingCrm) {
      throw new ConflictException('CRM já cadastrado');
    }

    const existingUser = await this.doctorModel.findOne({
      userId: createDoctorDto.userId,
    });
    if (existingUser) {
      throw new ConflictException('Usuário já vinculado a outro médico');
    }

    const doctor = new this.doctorModel(createDoctorDto);
    return doctor.save();
  }

  async findAll(
    query: QueryDoctorDto,
  ): Promise<PaginatedResponseDto<DoctorDocument>> {
    const { page = 1, limit = 10, specialty, isActive } = query;
    const filter: Record<string, any> = {};

    if (isActive !== undefined) {
      filter.isActive = isActive;
    }

    if (specialty) {
      filter.specialties = new RegExp(specialty, 'i');
    }

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.doctorModel
        .find(filter)
        .populate('userId', '-password')
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .exec(),
      this.doctorModel.countDocuments(filter).exec(),
    ]);

    return new PaginatedResponseDto(data, total, page, limit);
  }

  async findById(id: string): Promise<DoctorDocument> {
    const doctor = await this.doctorModel
      .findById(id)
      .populate('userId', '-password')
      .exec();

    if (!doctor) {
      throw new NotFoundException('Médico não encontrado');
    }
    return doctor;
  }

  async update(
    id: string,
    updateDoctorDto: UpdateDoctorDto,
  ): Promise<DoctorDocument> {
    const doctor = await this.doctorModel
      .findByIdAndUpdate(id, updateDoctorDto, { new: true })
      .populate('userId', '-password')
      .exec();

    if (!doctor) {
      throw new NotFoundException('Médico não encontrado');
    }
    return doctor;
  }

  async deactivate(id: string): Promise<DoctorDocument> {
    const doctor = await this.doctorModel
      .findByIdAndUpdate(id, { isActive: false }, { new: true })
      .exec();

    if (!doctor) {
      throw new NotFoundException('Médico não encontrado');
    }
    return doctor;
  }

  async getAvailableSlots(
    id: string,
    date: string,
    existingAppointments: { dateTime: Date; endDateTime: Date }[],
  ) {
    const doctor = await this.findById(id);
    const requestedDate = new Date(date);
    const dayOfWeek = requestedDate.getDay();

    const workingHoursForDay = doctor.workingHours.filter(
      (wh) => wh.dayOfWeek === dayOfWeek,
    );

    if (workingHoursForDay.length === 0) {
      return { doctorId: id, date, availableSlots: [] };
    }

    const slots: { startTime: string; endTime: string }[] = [];
    const duration = doctor.consultationDuration;

    for (const wh of workingHoursForDay) {
      const [startHour, startMin] = wh.startTime.split(':').map(Number);
      const [endHour, endMin] = wh.endTime.split(':').map(Number);

      let currentMinutes = startHour * 60 + startMin;
      const endMinutes = endHour * 60 + endMin;

      while (currentMinutes + duration <= endMinutes) {
        const slotStartH = Math.floor(currentMinutes / 60);
        const slotStartM = currentMinutes % 60;
        const slotEndMinutes = currentMinutes + duration;
        const slotEndH = Math.floor(slotEndMinutes / 60);
        const slotEndM = slotEndMinutes % 60;

        const slotStart = `${String(slotStartH).padStart(2, '0')}:${String(slotStartM).padStart(2, '0')}`;
        const slotEnd = `${String(slotEndH).padStart(2, '0')}:${String(slotEndM).padStart(2, '0')}`;

        const slotStartDate = new Date(requestedDate);
        slotStartDate.setHours(slotStartH, slotStartM, 0, 0);
        const slotEndDate = new Date(requestedDate);
        slotEndDate.setHours(slotEndH, slotEndM, 0, 0);

        const isOccupied = existingAppointments.some((apt) => {
          return apt.dateTime < slotEndDate && apt.endDateTime > slotStartDate;
        });

        if (!isOccupied) {
          slots.push({ startTime: slotStart, endTime: slotEnd });
        }

        currentMinutes += duration;
      }
    }

    return { doctorId: id, date, availableSlots: slots };
  }
}
