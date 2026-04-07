import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  LocalAtendimento,
  LocalAtendimentoDocument,
} from './schemas/local-atendimento.schema';
import { CreateLocalAtendimentoDto } from './dto/create-local-atendimento.dto';
import { UpdateLocalAtendimentoDto } from './dto/update-local-atendimento.dto';
import {
  PaginationDto,
  PaginatedResult,
} from '../../common/dto/pagination.dto';

@Injectable()
export class LocaisAtendimentoService {
  constructor(
    @InjectModel(LocalAtendimento.name)
    private readonly localAtendimentoModel: Model<LocalAtendimentoDocument>,
  ) {}

  private mapConfiguracoes(
    items: NonNullable<CreateLocalAtendimentoDto['configuracoes_profissionais']>,
  ) {
    return items.map((c) => ({
      ...c,
      profissional_id: new Types.ObjectId(c.profissional_id),
      horarios_funcionamento: c.horarios_funcionamento ?? [],
    }));
  }

  async create(dto: CreateLocalAtendimentoDto): Promise<LocalAtendimentoDocument> {
    const data = {
      ...dto,
      configuracoes_profissionais: dto.configuracoes_profissionais?.length
        ? this.mapConfiguracoes(dto.configuracoes_profissionais)
        : [],
    };
    return this.localAtendimentoModel.create(data);
  }

  async findAll(
    pagination: PaginationDto,
    filters?: { search?: string; ativo?: boolean },
  ): Promise<PaginatedResult<LocalAtendimentoDocument>> {
    const { page = 1, limit = 20 } = pagination;
    const query: Record<string, unknown> = {};

    if (filters?.ativo !== undefined) {
      query['ativo'] = filters.ativo;
    }

    if (filters?.search) {
      query['$text'] = { $search: filters.search };
    }

    const [data, total] = await Promise.all([
      this.localAtendimentoModel
        .find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.localAtendimentoModel.countDocuments(query).exec(),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findById(id: string): Promise<LocalAtendimentoDocument> {
    const local = await this.localAtendimentoModel.findById(id).exec();
    if (!local) {
      throw new NotFoundException(
        `Local de atendimento com ID ${id} não encontrado`,
      );
    }
    return local;
  }

  async update(
    id: string,
    dto: UpdateLocalAtendimentoDto,
  ): Promise<LocalAtendimentoDocument> {
    const updateData: Record<string, unknown> = { ...dto };

    if (dto.configuracoes_profissionais !== undefined) {
      updateData['configuracoes_profissionais'] = dto.configuracoes_profissionais
        .length
        ? this.mapConfiguracoes(dto.configuracoes_profissionais)
        : [];
    }

    const local = await this.localAtendimentoModel
      .findByIdAndUpdate(id, { $set: updateData }, { new: true })
      .exec();

    if (!local) {
      throw new NotFoundException(
        `Local de atendimento com ID ${id} não encontrado`,
      );
    }

    return local;
  }

  async remove(id: string): Promise<LocalAtendimentoDocument> {
    const local = await this.localAtendimentoModel
      .findByIdAndUpdate(id, { $set: { ativo: false } }, { new: true })
      .exec();

    if (!local) {
      throw new NotFoundException(
        `Local de atendimento com ID ${id} não encontrado`,
      );
    }

    return local;
  }
}
