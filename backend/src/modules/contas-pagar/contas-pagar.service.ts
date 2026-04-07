import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContaPagar, ContaPagarDocument } from './schemas/conta-pagar.schema';
import { CreateContaPagarDto } from './dto/create-conta-pagar.dto';
import { UpdateContaPagarDto } from './dto/update-conta-pagar.dto';
import {
  PaginationDto,
  PaginatedResult,
} from '../../common/dto/pagination.dto';
import { buildDataInfo } from '../../common/helpers/data-info.helper';

@Injectable()
export class ContasPagarService {
  constructor(
    @InjectModel(ContaPagar.name)
    private readonly contaModel: Model<ContaPagarDocument>,
  ) {}

  async create(dto: CreateContaPagarDto): Promise<ContaPagarDocument> {
    const data: Record<string, unknown> = {
      ...dto,
      tipo: 'despesa',
      data_vencimento: buildDataInfo(
        new Date(dto.data_vencimento.data_completa),
      ),
    };

    if (dto.data_pagamento) {
      data['data_pagamento'] = buildDataInfo(
        new Date(dto.data_pagamento.data_completa),
      );
    }

    return this.contaModel.create(data);
  }

  async findAll(
    pagination: PaginationDto,
    filters?: {
      status?: string;
      categoria_despesa?: string;
      data_inicio?: string;
      data_fim?: string;
    },
  ): Promise<PaginatedResult<ContaPagarDocument>> {
    const { page = 1, limit = 20 } = pagination;
    const query: Record<string, unknown> = {};

    if (filters?.status) query['status'] = filters.status;
    if (filters?.categoria_despesa)
      query['categoria_despesa'] = filters.categoria_despesa;

    if (filters?.data_inicio || filters?.data_fim) {
      const dateFilter: Record<string, Date> = {};
      if (filters.data_inicio)
        dateFilter['$gte'] = new Date(filters.data_inicio);
      if (filters.data_fim) dateFilter['$lte'] = new Date(filters.data_fim);
      query['data_vencimento.data_completa'] = dateFilter;
    }

    const [data, total] = await Promise.all([
      this.contaModel
        .find(query)
        .sort({ 'data_vencimento.data_completa': 1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.contaModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findById(id: string): Promise<ContaPagarDocument> {
    const doc = await this.contaModel.findById(id).exec();
    if (!doc) {
      throw new NotFoundException(`Conta a pagar com ID ${id} não encontrada`);
    }
    return doc;
  }

  async update(
    id: string,
    dto: UpdateContaPagarDto,
  ): Promise<ContaPagarDocument> {
    const updateData: Record<string, unknown> = { ...dto };

    if (dto.data_vencimento) {
      updateData['data_vencimento'] = buildDataInfo(
        new Date(dto.data_vencimento.data_completa),
      );
    }
    if (dto.data_pagamento) {
      updateData['data_pagamento'] = buildDataInfo(
        new Date(dto.data_pagamento.data_completa),
      );
    }

    const doc = await this.contaModel
      .findByIdAndUpdate(id, { $set: updateData }, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(`Conta a pagar com ID ${id} não encontrada`);
    }
    return doc;
  }

  async cancel(id: string): Promise<ContaPagarDocument> {
    const doc = await this.contaModel
      .findByIdAndUpdate(id, { $set: { status: 'cancelado' } }, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(`Conta a pagar com ID ${id} não encontrada`);
    }
    return doc;
  }
}
