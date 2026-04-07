import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilaEspera, FilaEsperaDocument } from './schemas/fila-espera.schema';
import { CreateFilaEsperaDto } from './dto/create-fila-espera.dto';
import { UpdateFilaEsperaDto } from './dto/update-fila-espera.dto';
import { PaginatedResult } from '../../common/dto/pagination.dto';
import { buildDataInfo } from '../../common/helpers/data-info.helper';

@Injectable()
export class FilaEsperaService {
  constructor(
    @InjectModel(FilaEspera.name)
    private readonly filaModel: Model<FilaEsperaDocument>,
  ) {}

  async create(dto: CreateFilaEsperaDto): Promise<FilaEsperaDocument> {
    const data = {
      ...dto,
      horario_checkin: buildDataInfo(
        new Date(dto.horario_checkin.data_completa),
      ),
    };
    return this.filaModel.create(data);
  }

  async findAll(filters?: {
    profissional_id?: string;
    local_atendimento_id?: string;
    status?: string;
  }): Promise<PaginatedResult<FilaEsperaDocument>> {
    const query: Record<string, unknown> = {};

    if (filters?.profissional_id)
      query['profissional_id'] = filters.profissional_id;
    if (filters?.local_atendimento_id)
      query['local_atendimento_id'] = filters.local_atendimento_id;
    if (filters?.status) query['status'] = filters.status;

    const data = await this.filaModel
      .find(query)
      .sort({ posicao_fila: 1 })
      .exec();

    return {
      data,
      total: data.length,
      page: 1,
      limit: data.length,
      totalPages: 1,
    };
  }

  async findById(id: string): Promise<FilaEsperaDocument> {
    const doc = await this.filaModel.findById(id).exec();
    if (!doc) {
      throw new NotFoundException(
        `Registro na fila com ID ${id} não encontrado`,
      );
    }
    return doc;
  }

  async update(
    id: string,
    dto: UpdateFilaEsperaDto,
  ): Promise<FilaEsperaDocument> {
    const updateData: Record<string, unknown> = { ...dto };

    if (dto.horario_checkin) {
      updateData['horario_checkin'] = buildDataInfo(
        new Date(dto.horario_checkin.data_completa),
      );
    }

    const doc = await this.filaModel
      .findByIdAndUpdate(id, { $set: updateData }, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(
        `Registro na fila com ID ${id} não encontrado`,
      );
    }
    return doc;
  }
}
