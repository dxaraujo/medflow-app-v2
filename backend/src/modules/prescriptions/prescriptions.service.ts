import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Prescription,
  PrescriptionDocument,
} from './schemas/prescription.schema';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { QueryPrescriptionDto } from './dto/query-prescription.dto';
import { PaginatedResponseDto } from '../../common/dto/paginated-response.dto';

@Injectable()
export class PrescriptionsService {
  constructor(
    @InjectModel(Prescription.name)
    private prescriptionModel: Model<PrescriptionDocument>,
  ) {}

  async create(
    createDto: CreatePrescriptionDto,
  ): Promise<PrescriptionDocument> {
    const prescription = new this.prescriptionModel({
      ...createDto,
      date: new Date(),
    });
    return prescription.save();
  }

  async findAll(
    query: QueryPrescriptionDto,
  ): Promise<PaginatedResponseDto<PrescriptionDocument>> {
    const { page = 1, limit = 10, patientId, doctorId } = query;
    const filter: Record<string, any> = {};

    if (patientId) filter.patientId = patientId;
    if (doctorId) filter.doctorId = doctorId;

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prescriptionModel
        .find(filter)
        .populate('patientId', 'firstName lastName cpf')
        .populate('doctorId', 'firstName lastName crm')
        .skip(skip)
        .limit(limit)
        .sort({ date: -1 })
        .exec(),
      this.prescriptionModel.countDocuments(filter).exec(),
    ]);

    return new PaginatedResponseDto(data, total, page, limit);
  }

  async findById(id: string): Promise<PrescriptionDocument> {
    const prescription = await this.prescriptionModel
      .findById(id)
      .populate('patientId', 'firstName lastName cpf dateOfBirth')
      .populate('doctorId', 'firstName lastName crm specialties')
      .populate('medicalRecordId')
      .exec();

    if (!prescription) {
      throw new NotFoundException('Prescrição não encontrada');
    }
    return prescription;
  }

  async findByPatientId(
    patientId: string,
  ): Promise<PrescriptionDocument[]> {
    return this.prescriptionModel
      .find({ patientId })
      .populate('doctorId', 'firstName lastName crm')
      .sort({ date: -1 })
      .exec();
  }

  async update(
    id: string,
    updateDto: UpdatePrescriptionDto,
  ): Promise<PrescriptionDocument> {
    const prescription = await this.findById(id);

    const createdAt = new Date(prescription['createdAt']);
    const now = new Date();
    const hoursDiff =
      (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60);

    if (hoursDiff > 24) {
      throw new BadRequestException(
        'Prescrição só pode ser editada nas primeiras 24 horas',
      );
    }

    const updated = await this.prescriptionModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .populate('patientId', 'firstName lastName cpf')
      .populate('doctorId', 'firstName lastName crm')
      .exec();

    if (!updated) {
      throw new NotFoundException('Prescrição não encontrada');
    }

    return updated;
  }
}
