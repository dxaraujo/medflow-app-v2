import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Profissional,
  ProfissionalDocument,
} from './schemas/profissional.schema';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import {
  PaginationDto,
  PaginatedResult,
} from '../../common/dto/pagination.dto';

@Injectable()
export class ProfissionaisService {
  constructor(
    @InjectModel(Profissional.name)
    private readonly profissionalModel: Model<ProfissionalDocument>,
  ) {}

  async create(dto: CreateProfissionalDto): Promise<ProfissionalDocument> {
    const existing = await this.profissionalModel
      .findOne({ cpf: dto.cpf })
      .exec();
    if (existing) {
      throw new ConflictException(
        `Profissional com CPF ${dto.cpf} já cadastrado`,
      );
    }

    if (dto.perfil === 'medico' && !dto.registro_profissional) {
      throw new BadRequestException(
        'Registro profissional é obrigatório para médicos',
      );
    }

    return this.profissionalModel.create(dto);
  }

  async findAll(
    pagination: PaginationDto,
    filters?: { perfil?: string; ativo?: boolean; search?: string },
  ): Promise<PaginatedResult<ProfissionalDocument>> {
    const { page = 1, limit = 20 } = pagination;
    const query: Record<string, unknown> = {};

    if (filters?.perfil) query['perfil'] = filters.perfil;
    if (filters?.ativo !== undefined) query['ativo'] = filters.ativo;
    if (filters?.search) query['$text'] = { $search: filters.search };

    const [data, total] = await Promise.all([
      this.profissionalModel
        .find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.profissionalModel.countDocuments(query).exec(),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findById(id: string): Promise<ProfissionalDocument> {
    const doc = await this.profissionalModel.findById(id).exec();
    if (!doc) {
      throw new NotFoundException(`Profissional com ID ${id} não encontrado`);
    }
    return doc;
  }

  async update(
    id: string,
    dto: UpdateProfissionalDto,
  ): Promise<ProfissionalDocument> {
    const doc = await this.profissionalModel
      .findByIdAndUpdate(id, { $set: dto }, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(`Profissional com ID ${id} não encontrado`);
    }
    return doc;
  }

  async remove(id: string): Promise<ProfissionalDocument> {
    const doc = await this.profissionalModel
      .findByIdAndUpdate(id, { $set: { ativo: false } }, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(`Profissional com ID ${id} não encontrado`);
    }
    return doc;
  }
}
