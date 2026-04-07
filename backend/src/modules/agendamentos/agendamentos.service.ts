import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agendamento, AgendamentoDocument } from './schemas/agendamento.schema';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';
import {
  PaginationDto,
  PaginatedResult,
} from '../../common/dto/pagination.dto';
import { buildDataInfo } from '../../common/helpers/data-info.helper';

@Injectable()
export class AgendamentosService {
  constructor(
    @InjectModel(Agendamento.name)
    private readonly agendamentoModel: Model<AgendamentoDocument>,
  ) {}

  async create(dto: CreateAgendamentoDto): Promise<AgendamentoDocument> {
    if (dto.duracao_minutos % 5 !== 0) {
      throw new BadRequestException('Duração deve ser múltiplo de 5');
    }

    const inicio = new Date(dto.data_horario_inicio.data_completa);
    const fimDate = dto.data_horario_fim
      ? new Date(dto.data_horario_fim.data_completa)
      : new Date(inicio.getTime() + dto.duracao_minutos * 60000);

    const data = {
      ...dto,
      data_horario_inicio: buildDataInfo(inicio),
      data_horario_fim: buildDataInfo(fimDate),
      duracao_personalizada: dto.duracao_personalizada ?? false,
      is_encaixe: dto.is_encaixe ?? false,
    };

    return this.agendamentoModel.create(data);
  }

  async findAll(
    pagination: PaginationDto,
    filters?: {
      profissional_id?: string;
      local_id?: string;
      paciente_id?: string;
      tipo?: string;
      status?: string;
      data_inicio?: string;
      data_fim?: string;
    },
  ): Promise<PaginatedResult<AgendamentoDocument>> {
    const { page = 1, limit = 20 } = pagination;
    const query: Record<string, unknown> = {};

    if (filters?.profissional_id)
      query['profissional_id'] = filters.profissional_id;
    if (filters?.local_id) query['local_id'] = filters.local_id;
    if (filters?.paciente_id) query['paciente_id'] = filters.paciente_id;
    if (filters?.tipo) query['tipo'] = filters.tipo;
    if (filters?.status) query['status'] = filters.status;

    if (filters?.data_inicio || filters?.data_fim) {
      const dateFilter: Record<string, Date> = {};
      if (filters.data_inicio)
        dateFilter['$gte'] = new Date(filters.data_inicio);
      if (filters.data_fim) dateFilter['$lte'] = new Date(filters.data_fim);
      query['data_horario_inicio.data_completa'] = dateFilter;
    }

    const [data, total] = await Promise.all([
      this.agendamentoModel
        .find(query)
        .sort({ 'data_horario_inicio.data_completa': 1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.agendamentoModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findById(id: string): Promise<AgendamentoDocument> {
    const doc = await this.agendamentoModel.findById(id).exec();
    if (!doc) {
      throw new NotFoundException(`Agendamento com ID ${id} não encontrado`);
    }
    return doc;
  }

  async update(
    id: string,
    dto: UpdateAgendamentoDto,
  ): Promise<AgendamentoDocument> {
    const updateData: Record<string, unknown> = { ...dto };

    if (dto.data_horario_inicio) {
      updateData['data_horario_inicio'] = buildDataInfo(
        new Date(dto.data_horario_inicio.data_completa),
      );
    }
    if (dto.data_horario_fim) {
      updateData['data_horario_fim'] = buildDataInfo(
        new Date(dto.data_horario_fim.data_completa),
      );
    }

    const doc = await this.agendamentoModel
      .findByIdAndUpdate(id, { $set: updateData }, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(`Agendamento com ID ${id} não encontrado`);
    }
    return doc;
  }

  async cancel(id: string): Promise<AgendamentoDocument> {
    const doc = await this.agendamentoModel
      .findByIdAndUpdate(id, { $set: { status: 'cancelado' } }, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(`Agendamento com ID ${id} não encontrado`);
    }
    return doc;
  }
}
