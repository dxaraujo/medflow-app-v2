import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from './schemas/patient.schema';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { QueryPatientDto } from './dto/query-patient.dto';
import { PaginatedResponseDto } from '../../common/dto/paginated-response.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<PatientDocument>,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<PatientDocument> {
    const existing = await this.patientModel.findOne({
      cpf: createPatientDto.cpf,
    });
    if (existing) {
      throw new ConflictException('CPF já cadastrado');
    }

    const patient = new this.patientModel(createPatientDto);
    return patient.save();
  }

  async findAll(
    query: QueryPatientDto,
  ): Promise<PaginatedResponseDto<PatientDocument>> {
    const { page = 1, limit = 10, search, isActive } = query;
    const filter: Record<string, any> = {};

    if (isActive !== undefined) {
      filter.isActive = isActive;
    }

    if (search) {
      const searchRegex = new RegExp(search, 'i');
      filter.$or = [
        { firstName: searchRegex },
        { lastName: searchRegex },
        { cpf: searchRegex },
      ];
    }

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.patientModel.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }).exec(),
      this.patientModel.countDocuments(filter).exec(),
    ]);

    return new PaginatedResponseDto(data, total, page, limit);
  }

  async findById(id: string): Promise<PatientDocument> {
    const patient = await this.patientModel.findById(id).exec();
    if (!patient) {
      throw new NotFoundException('Paciente não encontrado');
    }
    return patient;
  }

  async update(
    id: string,
    updatePatientDto: UpdatePatientDto,
  ): Promise<PatientDocument> {
    const patient = await this.patientModel
      .findByIdAndUpdate(id, updatePatientDto, { new: true })
      .exec();

    if (!patient) {
      throw new NotFoundException('Paciente não encontrado');
    }
    return patient;
  }

  async deactivate(id: string): Promise<PatientDocument> {
    const patient = await this.patientModel
      .findByIdAndUpdate(id, { isActive: false }, { new: true })
      .exec();

    if (!patient) {
      throw new NotFoundException('Paciente não encontrado');
    }
    return patient;
  }
}
