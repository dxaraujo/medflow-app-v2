import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Convenio, ConvenioDocument } from './schemas/convenio.schema';
import { CreateConvenioDto } from './dto/create-convenio.dto';
import { UpdateConvenioDto } from './dto/update-convenio.dto';
import {
  PaginationDto,
  PaginatedResult,
} from '../../common/dto/pagination.dto';

@Injectable()
export class ConveniosService {
  constructor(
    @InjectModel(Convenio.name)
    private readonly convenioModel: Model<ConvenioDocument>,
  ) {}

  async create(dto: CreateConvenioDto): Promise<ConvenioDocument> {
    if (dto.codigo_ans) {
      const existing = await this.convenioModel
        .findOne({ codigo_ans: dto.codigo_ans })
        .exec();
      if (existing) {
        throw new ConflictException(
          `Convênio com código ANS ${dto.codigo_ans} já cadastrado`,
        );
      }
    }

    return this.convenioModel.create(dto);
  }

  async findAll(
    pagination: PaginationDto,
    filters?: { search?: string; ativo?: boolean },
  ): Promise<PaginatedResult<ConvenioDocument>> {
    const { page = 1, limit = 20 } = pagination;
    const query: Record<string, unknown> = {};

    if (filters?.ativo !== undefined) {
      query['ativo'] = filters.ativo;
    }

    if (filters?.search) {
      query['$text'] = { $search: filters.search };
    }

    const [data, total] = await Promise.all([
      this.convenioModel
        .find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.convenioModel.countDocuments(query).exec(),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findById(id: string): Promise<ConvenioDocument> {
    const convenio = await this.convenioModel.findById(id).exec();
    if (!convenio) {
      throw new NotFoundException(`Convênio com ID ${id} não encontrado`);
    }
    return convenio;
  }

  async update(id: string, dto: UpdateConvenioDto): Promise<ConvenioDocument> {
    if (dto.codigo_ans) {
      const duplicate = await this.convenioModel
        .findOne({ codigo_ans: dto.codigo_ans, _id: { $ne: id } })
        .exec();
      if (duplicate) {
        throw new ConflictException(
          `Convênio com código ANS ${dto.codigo_ans} já cadastrado`,
        );
      }
    }

    const convenio = await this.convenioModel
      .findByIdAndUpdate(id, { $set: dto }, { new: true })
      .exec();

    if (!convenio) {
      throw new NotFoundException(`Convênio com ID ${id} não encontrado`);
    }

    return convenio;
  }

  async remove(id: string): Promise<ConvenioDocument> {
    const convenio = await this.convenioModel
      .findByIdAndUpdate(id, { $set: { ativo: false } }, { new: true })
      .exec();

    if (!convenio) {
      throw new NotFoundException(`Convênio com ID ${id} não encontrado`);
    }

    return convenio;
  }
}
