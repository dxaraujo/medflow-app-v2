import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  LancamentoReceita,
  LancamentoReceitaDocument,
} from './schemas/lancamento-receita.schema';
import { CreateLancamentoReceitaDto } from './dto/create-lancamento-receita.dto';
import { UpdateLancamentoReceitaDto } from './dto/update-lancamento-receita.dto';
import {
  PaginationDto,
  PaginatedResult,
} from '../../common/dto/pagination.dto';
import { buildDataInfo } from '../../common/helpers/data-info.helper';

@Injectable()
export class LancamentosReceitaService {
  constructor(
    @InjectModel(LancamentoReceita.name)
    private readonly lancamentoModel: Model<LancamentoReceitaDocument>,
  ) {}

  async create(
    dto: CreateLancamentoReceitaDto,
  ): Promise<LancamentoReceitaDocument> {
    const doc = new this.lancamentoModel({
      ...dto,
      tipo: 'receita',
      data_pagamento: buildDataInfo(new Date(dto.data_pagamento.data_completa)),
    });
    return doc.save();
  }

  async findAll(
    pagination: PaginationDto,
    filters?: {
      categoria?: string;
      status_pagamento?: string;
      data_inicio?: string;
      data_fim?: string;
    },
  ): Promise<PaginatedResult<LancamentoReceitaDocument>> {
    const { page = 1, limit = 20 } = pagination;
    const query: Record<string, unknown> = {};

    if (filters?.categoria) query['categoria'] = filters.categoria;
    if (filters?.status_pagamento)
      query['status_pagamento'] = filters.status_pagamento;

    if (filters?.data_inicio || filters?.data_fim) {
      const dateFilter: Record<string, Date> = {};
      if (filters.data_inicio)
        dateFilter['$gte'] = new Date(filters.data_inicio);
      if (filters.data_fim) dateFilter['$lte'] = new Date(filters.data_fim);
      query['data_pagamento.data_completa'] = dateFilter;
    }

    const [data, total] = await Promise.all([
      this.lancamentoModel
        .find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.lancamentoModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findById(id: string): Promise<LancamentoReceitaDocument> {
    const doc = await this.lancamentoModel.findById(id).exec();
    if (!doc) {
      throw new NotFoundException(`Lançamento com ID ${id} não encontrado`);
    }
    return doc;
  }

  async update(
    id: string,
    dto: UpdateLancamentoReceitaDto,
  ): Promise<LancamentoReceitaDocument> {
    const updateData: Record<string, unknown> = { ...dto };

    if (dto.data_pagamento) {
      updateData['data_pagamento'] = buildDataInfo(
        new Date(dto.data_pagamento.data_completa),
      );
    }

    const doc = await this.lancamentoModel
      .findByIdAndUpdate(id, { $set: updateData }, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(`Lançamento com ID ${id} não encontrado`);
    }
    return doc;
  }
}
