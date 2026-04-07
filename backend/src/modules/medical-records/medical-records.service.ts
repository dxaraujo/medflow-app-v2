import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  MedicalRecord,
  MedicalRecordDocument,
} from './schemas/medical-record.schema';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { QueryMedicalRecordDto } from './dto/query-medical-record.dto';
import { PaginatedResponseDto } from '../../common/dto/paginated-response.dto';

@Injectable()
export class MedicalRecordsService {
  constructor(
    @InjectModel(MedicalRecord.name)
    private medicalRecordModel: Model<MedicalRecordDocument>,
  ) {}

  async create(
    createDto: CreateMedicalRecordDto,
  ): Promise<MedicalRecordDocument> {
    const record = new this.medicalRecordModel({
      ...createDto,
      date: new Date(),
    });
    return record.save();
  }

  async findAll(
    query: QueryMedicalRecordDto,
  ): Promise<PaginatedResponseDto<MedicalRecordDocument>> {
    const { page = 1, limit = 10, patientId, doctorId, startDate, endDate } = query;
    const filter: Record<string, any> = {};

    if (patientId) filter.patientId = patientId;
    if (doctorId) filter.doctorId = doctorId;

    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        filter.date.$lte = end;
      }
    }

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.medicalRecordModel
        .find(filter)
        .populate('patientId', 'firstName lastName cpf')
        .populate('doctorId', 'firstName lastName crm')
        .skip(skip)
        .limit(limit)
        .sort({ date: -1 })
        .exec(),
      this.medicalRecordModel.countDocuments(filter).exec(),
    ]);

    return new PaginatedResponseDto(data, total, page, limit);
  }

  async findById(id: string): Promise<MedicalRecordDocument> {
    const record = await this.medicalRecordModel
      .findById(id)
      .populate('patientId', 'firstName lastName cpf dateOfBirth gender phone email')
      .populate('doctorId', 'firstName lastName crm specialties')
      .populate('appointmentId')
      .exec();

    if (!record) {
      throw new NotFoundException('Prontuário não encontrado');
    }
    return record;
  }

  async findByPatientId(patientId: string): Promise<MedicalRecordDocument[]> {
    return this.medicalRecordModel
      .find({ patientId })
      .populate('doctorId', 'firstName lastName crm specialties')
      .sort({ date: -1 })
      .exec();
  }

  async update(
    id: string,
    updateDto: UpdateMedicalRecordDto,
    currentUserId?: string,
  ): Promise<MedicalRecordDocument> {
    const record = await this.findById(id);

    const createdAt = new Date(record['createdAt']);
    const now = new Date();
    const hoursDiff =
      (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60);

    if (hoursDiff > 24) {
      throw new BadRequestException(
        'Prontuário só pode ser editado nas primeiras 24 horas',
      );
    }

    const updated = await this.medicalRecordModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .populate('patientId', 'firstName lastName cpf')
      .populate('doctorId', 'firstName lastName crm')
      .exec();

    if (!updated) {
      throw new NotFoundException('Prontuário não encontrado');
    }

    return updated;
  }
}
