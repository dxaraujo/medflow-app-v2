import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Appointment,
  AppointmentDocument,
  AppointmentStatus,
} from './schemas/appointment.schema';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { QueryAppointmentDto } from './dto/query-appointment.dto';
import { PaginatedResponseDto } from '../../common/dto/paginated-response.dto';
import { DoctorsService } from '../doctors/doctors.service';
import { PatientsService } from '../patients/patients.service';

const VALID_STATUS_TRANSITIONS: Record<string, string[]> = {
  [AppointmentStatus.SCHEDULED]: [
    AppointmentStatus.CONFIRMED,
    AppointmentStatus.CANCELLED,
    AppointmentStatus.NO_SHOW,
  ],
  [AppointmentStatus.CONFIRMED]: [
    AppointmentStatus.IN_PROGRESS,
    AppointmentStatus.CANCELLED,
    AppointmentStatus.NO_SHOW,
  ],
  [AppointmentStatus.IN_PROGRESS]: [AppointmentStatus.COMPLETED],
  [AppointmentStatus.NO_SHOW]: [AppointmentStatus.SCHEDULED],
};

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment.name)
    private appointmentModel: Model<AppointmentDocument>,
    private doctorsService: DoctorsService,
    private patientsService: PatientsService,
  ) {}

  async create(
    createAppointmentDto: CreateAppointmentDto,
    userId?: string,
  ): Promise<AppointmentDocument> {
    const patient = await this.patientsService.findById(
      createAppointmentDto.patientId,
    );
    if (!patient.isActive) {
      throw new BadRequestException('Paciente está inativo');
    }

    const doctor = await this.doctorsService.findById(
      createAppointmentDto.doctorId,
    );
    if (!doctor.isActive) {
      throw new BadRequestException('Médico está inativo');
    }

    const dateTime = new Date(createAppointmentDto.dateTime);
    if (dateTime <= new Date()) {
      throw new BadRequestException('Não é possível agendar no passado');
    }

    const endDateTime = new Date(
      dateTime.getTime() + doctor.consultationDuration * 60000,
    );

    const conflicting = await this.appointmentModel.findOne({
      doctorId: createAppointmentDto.doctorId,
      status: { $nin: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW] },
      dateTime: { $lt: endDateTime },
      endDateTime: { $gt: dateTime },
    });

    if (conflicting) {
      throw new ConflictException('Horário já está ocupado');
    }

    const patientConflict = await this.appointmentModel.findOne({
      patientId: createAppointmentDto.patientId,
      status: { $nin: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW] },
      dateTime: { $lt: endDateTime },
      endDateTime: { $gt: dateTime },
    });

    if (patientConflict) {
      throw new ConflictException(
        'Paciente já tem consulta neste horário',
      );
    }

    const appointment = new this.appointmentModel({
      ...createAppointmentDto,
      dateTime,
      endDateTime,
      status: AppointmentStatus.SCHEDULED,
      createdBy: userId,
    });

    return appointment.save();
  }

  async findAll(
    query: QueryAppointmentDto,
  ): Promise<PaginatedResponseDto<AppointmentDocument>> {
    const { page = 1, limit = 10, doctorId, patientId, status, startDate, endDate } = query;
    const filter: Record<string, any> = {};

    if (doctorId) filter.doctorId = doctorId;
    if (patientId) filter.patientId = patientId;
    if (status) filter.status = status;

    if (startDate || endDate) {
      filter.dateTime = {};
      if (startDate) filter.dateTime.$gte = new Date(startDate);
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        filter.dateTime.$lte = end;
      }
    }

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.appointmentModel
        .find(filter)
        .populate('patientId', 'firstName lastName cpf')
        .populate('doctorId', 'firstName lastName crm specialties')
        .skip(skip)
        .limit(limit)
        .sort({ dateTime: 1 })
        .exec(),
      this.appointmentModel.countDocuments(filter).exec(),
    ]);

    return new PaginatedResponseDto(data, total, page, limit);
  }

  async findById(id: string): Promise<AppointmentDocument> {
    const appointment = await this.appointmentModel
      .findById(id)
      .populate('patientId', 'firstName lastName cpf phone email')
      .populate('doctorId', 'firstName lastName crm specialties')
      .exec();

    if (!appointment) {
      throw new NotFoundException('Agendamento não encontrado');
    }
    return appointment;
  }

  async update(
    id: string,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<AppointmentDocument> {
    const appointment = await this.findById(id);

    if (
      appointment.status === AppointmentStatus.COMPLETED ||
      appointment.status === AppointmentStatus.CANCELLED
    ) {
      throw new BadRequestException(
        'Não é possível alterar consulta finalizada ou cancelada',
      );
    }

    if (updateAppointmentDto.dateTime) {
      const newDateTime = new Date(updateAppointmentDto.dateTime);
      const doctor = await this.doctorsService.findById(
        appointment.doctorId.toString(),
      );
      const endDateTime = new Date(
        newDateTime.getTime() + doctor.consultationDuration * 60000,
      );

      const conflicting = await this.appointmentModel.findOne({
        _id: { $ne: id },
        doctorId: appointment.doctorId,
        status: { $nin: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW] },
        dateTime: { $lt: endDateTime },
        endDateTime: { $gt: newDateTime },
      });

      if (conflicting) {
        throw new ConflictException('Horário já está ocupado');
      }

      (updateAppointmentDto as any).endDateTime = endDateTime;
    }

    const updated = await this.appointmentModel
      .findByIdAndUpdate(id, updateAppointmentDto, { new: true })
      .populate('patientId', 'firstName lastName cpf')
      .populate('doctorId', 'firstName lastName crm specialties')
      .exec();

    if (!updated) {
      throw new NotFoundException('Agendamento não encontrado');
    }

    return updated;
  }

  async updateStatus(
    id: string,
    newStatus: AppointmentStatus,
  ): Promise<AppointmentDocument> {
    const appointment = await this.findById(id);
    const currentStatus = appointment.status;

    const allowedTransitions = VALID_STATUS_TRANSITIONS[currentStatus];
    if (!allowedTransitions || !allowedTransitions.includes(newStatus)) {
      throw new BadRequestException(
        `Transição de status inválida: ${currentStatus} → ${newStatus}`,
      );
    }

    appointment.status = newStatus;
    return appointment.save();
  }

  async cancel(
    id: string,
    cancelReason: string,
  ): Promise<AppointmentDocument> {
    const appointment = await this.findById(id);

    if (
      appointment.status === AppointmentStatus.COMPLETED ||
      appointment.status === AppointmentStatus.CANCELLED
    ) {
      throw new BadRequestException(
        'Não é possível cancelar consulta finalizada ou já cancelada',
      );
    }

    appointment.status = AppointmentStatus.CANCELLED;
    appointment.cancelledAt = new Date();
    appointment.cancelReason = cancelReason;
    return appointment.save();
  }

  async findByDoctorAndDate(
    doctorId: string,
    date: string,
  ): Promise<{ dateTime: Date; endDateTime: Date }[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return this.appointmentModel
      .find({
        doctorId,
        dateTime: { $gte: startOfDay, $lte: endOfDay },
        status: { $nin: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW] },
      })
      .select('dateTime endDateTime')
      .exec();
  }
}
