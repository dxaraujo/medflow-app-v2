"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnamnesesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const anamnese_schema_1 = require("./schemas/anamnese.schema");
const data_info_helper_1 = require("../../common/helpers/data-info.helper");
const DIFF_SKIP_ROOTS = new Set([
    'historico_atualizacoes',
    'createdAt',
    'updatedAt',
    '__v',
    '_id',
]);
function stripUndefined(obj) {
    const out = {};
    for (const key of Object.keys(obj)) {
        const v = obj[key];
        if (v !== undefined) {
            out[key] = v;
        }
    }
    return out;
}
function mergeAnamnesePatch(current, patch) {
    const result = { ...current };
    for (const key of Object.keys(patch)) {
        const pv = patch[key];
        if (pv === undefined)
            continue;
        const cv = current[key];
        if (Array.isArray(pv)) {
            result[key] = pv;
            continue;
        }
        if (pv &&
            typeof pv === 'object' &&
            !(pv instanceof mongoose_2.Types.ObjectId) &&
            !(pv instanceof Date) &&
            cv &&
            typeof cv === 'object' &&
            !Array.isArray(cv) &&
            !(cv instanceof mongoose_2.Types.ObjectId) &&
            !(cv instanceof Date)) {
            result[key] = mergeAnamnesePatch(cv, pv);
        }
        else {
            result[key] = pv;
        }
    }
    return result;
}
function flattenForDiff(obj, prefix = '', out = {}) {
    if (obj === null || obj === undefined) {
        if (prefix)
            out[prefix] = obj;
        return out;
    }
    if (obj instanceof mongoose_2.Types.ObjectId) {
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
        const rec = obj;
        const keys = Object.keys(rec).sort();
        for (const k of keys) {
            const path = prefix ? `${prefix}.${k}` : k;
            flattenForDiff(rec[k], path, out);
        }
        return out;
    }
    if (prefix)
        out[prefix] = obj;
    return out;
}
function valuesEqual(a, b) {
    if (a === b)
        return true;
    if (typeof a === 'object' &&
        a !== null &&
        typeof b === 'object' &&
        b !== null) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return false;
}
function collectDiff(before, after) {
    const flatBefore = flattenForDiff(before);
    const flatAfter = flattenForDiff(after);
    const changes = [];
    const allKeys = new Set([
        ...Object.keys(flatBefore),
        ...Object.keys(flatAfter),
    ]);
    for (const path of allKeys) {
        const root = path.split('.')[0];
        if (DIFF_SKIP_ROOTS.has(root))
            continue;
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
function normalizeCreateNested(dto) {
    return {
        paciente_id: new mongoose_2.Types.ObjectId(dto.paciente_id),
        profissional_criacao_id: new mongoose_2.Types.ObjectId(dto.profissional_criacao_id),
        data_criacao: (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_criacao.data_completa)),
        queixa_principal: dto.queixa_principal,
        historia_doenca_atual: {
            ...dto.historia_doenca_atual,
            data_inicio_sintomas: dto.historia_doenca_atual.data_inicio_sintomas
                ? (0, data_info_helper_1.buildDataInfo)(new Date(dto.historia_doenca_atual.data_inicio_sintomas.data_completa))
                : undefined,
        },
        antecedentes_pessoais: {
            doencas_previas: dto.antecedentes_pessoais.doencas_previas ?? [],
            cirurgias: dto.antecedentes_pessoais.cirurgias ?? [],
            alergias: dto.antecedentes_pessoais.alergias ?? [],
            medicamentos_uso_continuo: dto.antecedentes_pessoais.medicamentos_uso_continuo ?? [],
            internacoes: dto.antecedentes_pessoais.internacoes ?? [],
        },
        antecedentes_familiares: dto.antecedentes_familiares ?? [],
        habitos_vida: dto.habitos_vida,
        campos_especialidade: dto.campos_especialidade ?? [],
        cids: dto.cids ?? [],
        historico_atualizacoes: [],
    };
}
function normalizeUpdatePatch(dto) {
    const { profissional_id: _auditProf, motivo: _auditMotivo, ...rest } = dto;
    void _auditProf;
    void _auditMotivo;
    const patch = stripUndefined(rest);
    const out = { ...patch };
    if (dto.profissional_criacao_id !== undefined) {
        out['profissional_criacao_id'] = new mongoose_2.Types.ObjectId(dto.profissional_criacao_id);
    }
    if (dto.data_criacao !== undefined) {
        out['data_criacao'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_criacao.data_completa));
    }
    if (dto.historia_doenca_atual !== undefined) {
        const h = { ...dto.historia_doenca_atual };
        if (dto.historia_doenca_atual.data_inicio_sintomas !== undefined) {
            h['data_inicio_sintomas'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.historia_doenca_atual.data_inicio_sintomas.data_completa));
        }
        out['historia_doenca_atual'] = h;
    }
    return out;
}
let AnamnesesService = class AnamnesesService {
    anamneseModel;
    constructor(anamneseModel) {
        this.anamneseModel = anamneseModel;
    }
    async create(dto) {
        const existing = await this.anamneseModel
            .findOne({ paciente_id: new mongoose_2.Types.ObjectId(dto.paciente_id) })
            .exec();
        if (existing) {
            throw new common_1.ConflictException(`Já existe anamnese para o paciente ${dto.paciente_id}`);
        }
        const data = normalizeCreateNested(dto);
        return this.anamneseModel.create(data);
    }
    async findByPacienteId(pacienteId) {
        const doc = await this.anamneseModel
            .findOne({ paciente_id: new mongoose_2.Types.ObjectId(pacienteId) })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Anamnese não encontrada para o paciente ${pacienteId}`);
        }
        return doc;
    }
    async update(id, dto) {
        const doc = await this.anamneseModel.findById(id).exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Anamnese com ID ${id} não encontrada`);
        }
        const patchKeys = Object.keys(dto).filter((k) => k !== 'profissional_id' &&
            k !== 'motivo' &&
            dto[k] !== undefined);
        if (patchKeys.length === 0) {
            return doc;
        }
        const patch = normalizeUpdatePatch(dto);
        const before = doc.toObject();
        const merged = mergeAnamnesePatch(before, patch);
        const changes = collectDiff(before, merged);
        if (changes.length === 0) {
            return doc;
        }
        if (!dto.profissional_id) {
            throw new common_1.BadRequestException('profissional_id é obrigatório para registrar alterações na anamnese');
        }
        const prevHistorico = before['historico_atualizacoes'];
        const historico = Array.isArray(prevHistorico)
            ? prevHistorico.slice()
            : [];
        const now = (0, data_info_helper_1.buildDataInfo)(new Date());
        const profId = new mongoose_2.Types.ObjectId(dto.profissional_id);
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
};
exports.AnamnesesService = AnamnesesService;
exports.AnamnesesService = AnamnesesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(anamnese_schema_1.Anamnese.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AnamnesesService);
//# sourceMappingURL=anamneses.service.js.map