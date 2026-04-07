import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paciente, PacienteDocument } from './schemas/paciente.schema';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import {
  PaginationDto,
  PaginatedResult,
} from '../../common/dto/pagination.dto';
import { buildDataInfo } from '../../common/helpers/data-info.helper';

@Injectable()
export class PacientesService {
  constructor(
    @InjectModel(Paciente.name)
    private readonly pacienteModel: Model<PacienteDocument>,
  ) {}

  async create(dto: CreatePacienteDto): Promise<PacienteDocument> {
    const existing = await this.pacienteModel.findOne({ cpf: dto.cpf }).exec();
    if (existing) {
      throw new ConflictException(`Paciente com CPF ${dto.cpf} já cadastrado`);
    }

    const data = {
      ...dto,
      data_nascimento: buildDataInfo(
        new Date(dto.data_nascimento.data_completa),
      ),
      convenios: dto.convenios?.map((c) => ({
        ...c,
        validade: c.validade
          ? buildDataInfo(new Date(c.validade.data_completa))
          : undefined,
      })),
    };

    return this.pacienteModel.create(data);
  }

  async findAll(
    pagination: PaginationDto,
    filters?: { search?: string; ativo?: boolean },
  ): Promise<PaginatedResult<PacienteDocument>> {
    const { page = 1, limit = 20 } = pagination;
    const query: Record<string, unknown> = {};

    if (filters?.ativo !== undefined) {
      query['ativo'] = filters.ativo;
    }

    if (filters?.search) {
      query['$text'] = { $search: filters.search };
    }

    const [data, total] = await Promise.all([
      this.pacienteModel
        .find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.pacienteModel.countDocuments(query).exec(),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findById(id: string): Promise<PacienteDocument> {
    const paciente = await this.pacienteModel.findById(id).exec();
    if (!paciente) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado`);
    }
    return paciente;
  }

  async update(id: string, dto: UpdatePacienteDto): Promise<PacienteDocument> {
    const updateData: Record<string, unknown> = { ...dto };

    if (dto.data_nascimento) {
      updateData['data_nascimento'] = buildDataInfo(
        new Date(dto.data_nascimento.data_completa),
      );
    }

    const paciente = await this.pacienteModel
      .findByIdAndUpdate(id, { $set: updateData }, { new: true })
      .exec();

    if (!paciente) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado`);
    }

    return paciente;
  }

  async remove(id: string): Promise<PacienteDocument> {
    const paciente = await this.pacienteModel
      .findByIdAndUpdate(id, { $set: { ativo: false } }, { new: true })
      .exec();

    if (!paciente) {
      throw new NotFoundException(`Paciente com ID ${id} não encontrado`);
    }

    return paciente;
  }
}
