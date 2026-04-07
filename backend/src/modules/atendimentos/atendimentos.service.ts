import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Atendimento, AtendimentoDocument } from './schemas/atendimento.schema';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import {
  PaginationDto,
  PaginatedResult,
} from '../../common/dto/pagination.dto';
import { buildDataInfo } from '../../common/helpers/data-info.helper';

function omitUndefined<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined),
  ) as Partial<T>;
}

@Injectable()
export class AtendimentosService {
  constructor(
    @InjectModel(Atendimento.name)
    private readonly atendimentoModel: Model<AtendimentoDocument>,
  ) {}

  private mapProcedimentos(
    items: CreateAtendimentoDto['procedimentos'],
  ): AtendimentoDocument['procedimentos'] {
    if (!items?.length) return [];
    return items.map((p) => ({
      ...p,
      data: buildDataInfo(new Date(p.data.data_completa)),
    }));
  }

  private mapPedidosExames(
    items: CreateAtendimentoDto['pedidos_exames'],
  ): AtendimentoDocument['pedidos_exames'] {
    if (!items?.length) return [];
    return items.map((e) => ({
      ...e,
      data_solicitacao: buildDataInfo(
        new Date(e.data_solicitacao.data_completa),
      ),
      data_resultado: e.data_resultado
        ? buildDataInfo(new Date(e.data_resultado.data_completa))
        : undefined,
    }));
  }

  private mapAtestados(
    items: CreateAtendimentoDto['atestados'],
  ): AtendimentoDocument['atestados'] {
    if (!items?.length) return [];
    return items.map((a) => ({
      ...a,
      data_emissao: buildDataInfo(new Date(a.data_emissao.data_completa)),
    }));
  }

  private mapDocumentosAnexados(
    items: CreateAtendimentoDto['documentos_anexados'],
  ): AtendimentoDocument['documentos_anexados'] {
    if (!items?.length) return [];
    return items.map((d) => ({
      ...d,
      data_upload: buildDataInfo(new Date(d.data_upload.data_completa)),
      profissional_upload_id: new Types.ObjectId(d.profissional_upload_id),
    }));
  }

  private mapExameFisico(
    ex?: CreateAtendimentoDto['exame_fisico'],
  ): AtendimentoDocument['exame_fisico'] {
    if (!ex) return undefined;
    const seg = ex.segmentar;
    const mapSeg = (s?: { normal: boolean; descricao?: string }) =>
      s ? { normal: s.normal, descricao: s.descricao ?? '' } : undefined;
    return {
      ...ex,
      segmentar: seg
        ? {
            cabeca_pescoco: mapSeg(seg.cabeca_pescoco),
            torax_pulmoes: mapSeg(seg.torax_pulmoes),
            cardiovascular: mapSeg(seg.cardiovascular),
            abdomen: mapSeg(seg.abdomen),
            extremidades: mapSeg(seg.extremidades),
            neurologico: mapSeg(seg.neurologico),
            pele: mapSeg(seg.pele),
          }
        : undefined,
    };
  }

  private buildCreatePayload(dto: CreateAtendimentoDto): Partial<Atendimento> {
    return {
      paciente_id: new Types.ObjectId(dto.paciente_id),
      profissional_id: new Types.ObjectId(dto.profissional_id),
      local_atendimento_id: new Types.ObjectId(dto.local_atendimento_id),
      agendamento_id: dto.agendamento_id
        ? new Types.ObjectId(dto.agendamento_id)
        : undefined,
      data_atendimento: buildDataInfo(
        new Date(dto.data_atendimento.data_completa),
      ),
      tipo_atendimento: dto.tipo_atendimento as Atendimento['tipo_atendimento'],
      status: dto.status as Atendimento['status'],
      nome_paciente: dto.nome_paciente,
      nome_profissional: dto.nome_profissional,
      sinais_vitais: dto.sinais_vitais,
      exame_fisico: this.mapExameFisico(dto.exame_fisico),
      hipoteses_diagnosticas: dto.hipoteses_diagnosticas ?? [],
      conduta: dto.conduta,
      procedimentos: this.mapProcedimentos(dto.procedimentos),
      prescricoes: dto.prescricoes
        ? {
            tipo_receita: dto.prescricoes.tipo_receita,
            numero_receita: dto.prescricoes.numero_receita,
            itens: dto.prescricoes.itens ?? [],
          }
        : undefined,
      pedidos_exames: this.mapPedidosExames(dto.pedidos_exames),
      atestados: this.mapAtestados(dto.atestados),
      documentos_anexados: this.mapDocumentosAnexados(dto.documentos_anexados),
    };
  }

  async create(dto: CreateAtendimentoDto): Promise<AtendimentoDocument> {
    const payload = this.buildCreatePayload(dto);
    return this.atendimentoModel.create(payload);
  }

  async findAll(
    pagination: PaginationDto,
    filters?: {
      paciente_id?: string;
      profissional_id?: string;
      status?: string;
      data_inicio?: string;
      data_fim?: string;
    },
  ): Promise<PaginatedResult<AtendimentoDocument>> {
    const { page = 1, limit = 20 } = pagination;
    const query: Record<string, unknown> = {};

    if (filters?.paciente_id) {
      query['paciente_id'] = new Types.ObjectId(filters.paciente_id);
    }
    if (filters?.profissional_id) {
      query['profissional_id'] = new Types.ObjectId(filters.profissional_id);
    }
    if (filters?.status) {
      query['status'] = filters.status;
    }
    if (filters?.data_inicio || filters?.data_fim) {
      const range: { $gte?: Date; $lte?: Date } = {};
      if (filters.data_inicio) {
        range.$gte = new Date(filters.data_inicio);
      }
      if (filters.data_fim) {
        range.$lte = new Date(filters.data_fim);
      }
      query['data_atendimento.data_completa'] = range;
    }

    const [data, total] = await Promise.all([
      this.atendimentoModel
        .find(query)
        .sort({ 'data_atendimento.data_completa': -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.atendimentoModel.countDocuments(query).exec(),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findById(id: string): Promise<AtendimentoDocument> {
    const doc = await this.atendimentoModel.findById(id).exec();
    if (!doc) {
      throw new NotFoundException(`Atendimento com ID ${id} não encontrado`);
    }
    return doc;
  }

  private applyUpdateTransforms(
    dto: UpdateAtendimentoDto,
  ): Record<string, unknown> {
    const raw: Record<string, unknown> = { ...dto };

    if (dto.paciente_id !== undefined) {
      raw['paciente_id'] = new Types.ObjectId(dto.paciente_id);
    }
    if (dto.profissional_id !== undefined) {
      raw['profissional_id'] = new Types.ObjectId(dto.profissional_id);
    }
    if (dto.local_atendimento_id !== undefined) {
      raw['local_atendimento_id'] = new Types.ObjectId(
        dto.local_atendimento_id,
      );
    }
    if (dto.agendamento_id !== undefined) {
      raw['agendamento_id'] = dto.agendamento_id
        ? new Types.ObjectId(dto.agendamento_id)
        : undefined;
    }
    if (dto.data_atendimento !== undefined) {
      raw['data_atendimento'] = buildDataInfo(
        new Date(dto.data_atendimento.data_completa),
      );
    }
    if (dto.exame_fisico !== undefined) {
      raw['exame_fisico'] = this.mapExameFisico(dto.exame_fisico);
    }
    if (dto.procedimentos !== undefined) {
      raw['procedimentos'] = this.mapProcedimentos(dto.procedimentos);
    }
    if (dto.prescricoes !== undefined) {
      raw['prescricoes'] = {
        tipo_receita: dto.prescricoes.tipo_receita,
        numero_receita: dto.prescricoes.numero_receita,
        itens: dto.prescricoes.itens ?? [],
      };
    }
    if (dto.pedidos_exames !== undefined) {
      raw['pedidos_exames'] = this.mapPedidosExames(dto.pedidos_exames);
    }
    if (dto.atestados !== undefined) {
      raw['atestados'] = this.mapAtestados(dto.atestados);
    }
    if (dto.documentos_anexados !== undefined) {
      raw['documentos_anexados'] = this.mapDocumentosAnexados(
        dto.documentos_anexados,
      );
    }

    return omitUndefined(raw);
  }

  async update(
    id: string,
    dto: UpdateAtendimentoDto,
  ): Promise<AtendimentoDocument> {
    const existing = await this.atendimentoModel.findById(id).exec();
    if (!existing) {
      throw new NotFoundException(`Atendimento com ID ${id} não encontrado`);
    }
    if (existing.status === 'finalizado') {
      throw new BadRequestException(
        'Atendimento finalizado não pode ser alterado',
      );
    }

    const updateData = this.applyUpdateTransforms(dto);

    const doc = await this.atendimentoModel
      .findByIdAndUpdate(id, { $set: updateData }, { new: true })
      .exec();

    if (!doc) {
      throw new NotFoundException(`Atendimento com ID ${id} não encontrado`);
    }
    return doc;
  }

  async remove(id: string): Promise<AtendimentoDocument> {
    const doc = await this.atendimentoModel.findByIdAndDelete(id).exec();
    if (!doc) {
      throw new NotFoundException(`Atendimento com ID ${id} não encontrado`);
    }
    return doc;
  }
}
