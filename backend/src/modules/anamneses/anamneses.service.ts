import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Anamnese, AnamneseDocument } from './schemas/anamnese.schema';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';
import { UpdateAnamneseDto } from './dto/update-anamnese.dto';
import { buildDataInfo } from '../../common/helpers/data-info.helper';

const DIFF_SKIP_ROOTS = new Set([
  'historico_atualizacoes',
  'createdAt',
  'updatedAt',
  '__v',
  '_id',
]);

function stripUndefined<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const out: Partial<T> = {};
  for (const key of Object.keys(obj) as (keyof T)[]) {
    const v = obj[key];
    if (v !== undefined) {
      out[key] = v;
    }
  }
  return out;
}

function mergeAnamnesePatch(
  current: Record<string, unknown>,
  patch: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...current };
  for (const key of Object.keys(patch)) {
    const pv = patch[key];
    if (pv === undefined) continue;
    const cv = current[key];
    if (Array.isArray(pv)) {
      result[key] = pv;
      continue;
    }
    if (
      pv &&
      typeof pv === 'object' &&
      !(pv instanceof Types.ObjectId) &&
      !(pv instanceof Date) &&
      cv &&
      typeof cv === 'object' &&
      !Array.isArray(cv) &&
      !(cv instanceof Types.ObjectId) &&
      !(cv instanceof Date)
    ) {
      result[key] = mergeAnamnesePatch(
        cv as Record<string, unknown>,
        pv as Record<string, unknown>,
      );
    } else {
      result[key] = pv;
    }
  }
  return result;
}

function flattenForDiff(
  obj: unknown,
  prefix = '',
  out: Record<string, unknown> = {},
): Record<string, unknown> {
  if (obj === null || obj === undefined) {
    if (prefix) out[prefix] = obj;
    return out;
  }
  if (obj instanceof Types.ObjectId) {
    out[prefix] = obj.toString();
    return out;
  }
  if (obj instanceof Date) {
    out[prefix] = obj.toISOString();
    return out;
  }
  if (Array.isArray(obj)) {
    out[prefix] = JSON.stringify(obj);
    return out;
  }
  if (typeof obj === 'object') {
    const rec = obj as Record<string, unknown>;
    const keys = Object.keys(rec).sort();
    for (const k of keys) {
      const path = prefix ? `${prefix}.${k}` : k;
      flattenForDiff(rec[k], path, out);
    }
    return out;
  }
  if (prefix) out[prefix] = obj;
  return out;
}

function valuesEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (
    typeof a === 'object' &&
    a !== null &&
    typeof b === 'object' &&
    b !== null
  ) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return false;
}

function collectDiff(
  before: Record<string, unknown>,
  after: Record<string, unknown>,
): { path: string; valor_anterior: unknown; valor_novo: unknown }[] {
  const flatBefore = flattenForDiff(before);
  const flatAfter = flattenForDiff(after);
  const changes: {
    path: string;
    valor_anterior: unknown;
    valor_novo: unknown;
  }[] = [];
  const allKeys = new Set([
    ...Object.keys(flatBefore),
    ...Object.keys(flatAfter),
  ]);

  for (const path of allKeys) {
    const root = path.split('.')[0];
    if (DIFF_SKIP_ROOTS.has(root)) continue;
    const o = flatBefore[path];
    const n = flatAfter[path];
    if (!valuesEqual(o, n)) {
      changes.push({
        path,
        valor_anterior: o,
        valor_novo: n,
      });
    }
  }
  return changes;
}

function normalizeCreateNested(
  dto: CreateAnamneseDto,
): Record<string, unknown> {
  return {
    paciente_id: new Types.ObjectId(dto.paciente_id),
    profissional_criacao_id: new Types.ObjectId(dto.profissional_criacao_id),
    data_criacao: buildDataInfo(new Date(dto.data_criacao.data_completa)),
    queixa_principal: dto.queixa_principal,
    historia_doenca_atual: {
      ...dto.historia_doenca_atual,
      data_inicio_sintomas: dto.historia_doenca_atual.data_inicio_sintomas
        ? buildDataInfo(
            new Date(
              dto.historia_doenca_atual.data_inicio_sintomas.data_completa,
            ),
          )
        : undefined,
    },
    antecedentes_pessoais: {
      doencas_previas: dto.antecedentes_pessoais.doencas_previas ?? [],
      cirurgias: dto.antecedentes_pessoais.cirurgias ?? [],
      alergias: dto.antecedentes_pessoais.alergias ?? [],
      medicamentos_uso_continuo:
        dto.antecedentes_pessoais.medicamentos_uso_continuo ?? [],
      internacoes: dto.antecedentes_pessoais.internacoes ?? [],
    },
    antecedentes_familiares: dto.antecedentes_familiares ?? [],
    habitos_vida: dto.habitos_vida,
    campos_especialidade: dto.campos_especialidade ?? [],
    cids: dto.cids ?? [],
    historico_atualizacoes: [],
  };
}

function normalizeUpdatePatch(dto: UpdateAnamneseDto): Record<string, unknown> {
  const { profissional_id: _auditProf, motivo: _auditMotivo, ...rest } = dto;
  void _auditProf;
  void _auditMotivo;
  const patch = stripUndefined(rest as Record<string, unknown>);
  const out: Record<string, unknown> = { ...patch };

  if (dto.profissional_criacao_id !== undefined) {
    out['profissional_criacao_id'] = new Types.ObjectId(
      dto.profissional_criacao_id,
    );
  }
  if (dto.data_criacao !== undefined) {
    out['data_criacao'] = buildDataInfo(
      new Date(dto.data_criacao.data_completa),
    );
  }
  if (dto.historia_doenca_atual !== undefined) {
    const h = { ...dto.historia_doenca_atual } as Record<string, unknown>;
    if (dto.historia_doenca_atual.data_inicio_sintomas !== undefined) {
      h['data_inicio_sintomas'] = buildDataInfo(
        new Date(dto.historia_doenca_atual.data_inicio_sintomas.data_completa),
      );
    }
    out['historia_doenca_atual'] = h;
  }
  return out;
}

@Injectable()
export class AnamnesesService {
  constructor(
    @InjectModel(Anamnese.name)
    private readonly anamneseModel: Model<AnamneseDocument>,
  ) {}

  async create(dto: CreateAnamneseDto): Promise<AnamneseDocument> {
    const existing = await this.anamneseModel
      .findOne({ paciente_id: new Types.ObjectId(dto.paciente_id) })
      .exec();
    if (existing) {
      throw new ConflictException(
        `Já existe anamnese para o paciente ${dto.paciente_id}`,
      );
    }

    const data = normalizeCreateNested(dto);
    return this.anamneseModel.create(data);
  }

  async findByPacienteId(pacienteId: string): Promise<AnamneseDocument> {
    const doc = await this.anamneseModel
      .findOne({ paciente_id: new Types.ObjectId(pacienteId) })
      .exec();
    if (!doc) {
      throw new NotFoundException(
        `Anamnese não encontrada para o paciente ${pacienteId}`,
      );
    }
    return doc;
  }

  async update(id: string, dto: UpdateAnamneseDto): Promise<AnamneseDocument> {
    const doc = await this.anamneseModel.findById(id).exec();
    if (!doc) {
      throw new NotFoundException(`Anamnese com ID ${id} não encontrada`);
    }

    const patchKeys = Object.keys(dto).filter(
      (k) =>
        k !== 'profissional_id' &&
        k !== 'motivo' &&
        dto[k as keyof UpdateAnamneseDto] !== undefined,
    );
    if (patchKeys.length === 0) {
      return doc;
    }

    const patch = normalizeUpdatePatch(dto);
    const before = doc.toObject() as unknown as Record<string, unknown>;
    const merged = mergeAnamnesePatch(before, patch);
    const changes = collectDiff(before, merged);

    if (changes.length === 0) {
      return doc;
    }

    if (!dto.profissional_id) {
      throw new BadRequestException(
        'profissional_id é obrigatório para registrar alterações na anamnese',
      );
    }

    const prevHistorico = before['historico_atualizacoes'];
    const historico: unknown[] = Array.isArray(prevHistorico)
      ? prevHistorico.slice()
      : [];
    const now = buildDataInfo(new Date());
    const profId = new Types.ObjectId(dto.profissional_id);

    for (const c of changes) {
      historico.push({
        data_alteracao: now,
        profissional_id: profId,
        campo_alterado: c.path,
        valor_anterior: c.valor_anterior,
        valor_novo: c.valor_novo,
        motivo: dto.motivo,
      });
    }

    merged['historico_atualizacoes'] = historico;
    doc.set(merged);
    return doc.save();
  }
}
