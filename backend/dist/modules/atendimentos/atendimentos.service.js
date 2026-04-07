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
exports.AtendimentosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const atendimento_schema_1 = require("./schemas/atendimento.schema");
const data_info_helper_1 = require("../../common/helpers/data-info.helper");
function omitUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined));
}
let AtendimentosService = class AtendimentosService {
    atendimentoModel;
    constructor(atendimentoModel) {
        this.atendimentoModel = atendimentoModel;
    }
    mapProcedimentos(items) {
        if (!items?.length)
            return [];
        return items.map((p) => ({
            ...p,
            data: (0, data_info_helper_1.buildDataInfo)(new Date(p.data.data_completa)),
        }));
    }
    mapPedidosExames(items) {
        if (!items?.length)
            return [];
        return items.map((e) => ({
            ...e,
            data_solicitacao: (0, data_info_helper_1.buildDataInfo)(new Date(e.data_solicitacao.data_completa)),
            data_resultado: e.data_resultado
                ? (0, data_info_helper_1.buildDataInfo)(new Date(e.data_resultado.data_completa))
                : undefined,
        }));
    }
    mapAtestados(items) {
        if (!items?.length)
            return [];
        return items.map((a) => ({
            ...a,
            data_emissao: (0, data_info_helper_1.buildDataInfo)(new Date(a.data_emissao.data_completa)),
        }));
    }
    mapDocumentosAnexados(items) {
        if (!items?.length)
            return [];
        return items.map((d) => ({
            ...d,
            data_upload: (0, data_info_helper_1.buildDataInfo)(new Date(d.data_upload.data_completa)),
            profissional_upload_id: new mongoose_2.Types.ObjectId(d.profissional_upload_id),
        }));
    }
    mapExameFisico(ex) {
        if (!ex)
            return undefined;
        const seg = ex.segmentar;
        const mapSeg = (s) => s ? { normal: s.normal, descricao: s.descricao ?? '' } : undefined;
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
    buildCreatePayload(dto) {
        return {
            paciente_id: new mongoose_2.Types.ObjectId(dto.paciente_id),
            profissional_id: new mongoose_2.Types.ObjectId(dto.profissional_id),
            local_atendimento_id: new mongoose_2.Types.ObjectId(dto.local_atendimento_id),
            agendamento_id: dto.agendamento_id
                ? new mongoose_2.Types.ObjectId(dto.agendamento_id)
                : undefined,
            data_atendimento: (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_atendimento.data_completa)),
            tipo_atendimento: dto.tipo_atendimento,
            status: dto.status,
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
    async create(dto) {
        const payload = this.buildCreatePayload(dto);
        return this.atendimentoModel.create(payload);
    }
    async findAll(pagination, filters) {
        const { page = 1, limit = 20 } = pagination;
        const query = {};
        if (filters?.paciente_id) {
            query['paciente_id'] = new mongoose_2.Types.ObjectId(filters.paciente_id);
        }
        if (filters?.profissional_id) {
            query['profissional_id'] = new mongoose_2.Types.ObjectId(filters.profissional_id);
        }
        if (filters?.status) {
            query['status'] = filters.status;
        }
        if (filters?.data_inicio || filters?.data_fim) {
            const range = {};
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
    async findById(id) {
        const doc = await this.atendimentoModel.findById(id).exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Atendimento com ID ${id} não encontrado`);
        }
        return doc;
    }
    applyUpdateTransforms(dto) {
        const raw = { ...dto };
        if (dto.paciente_id !== undefined) {
            raw['paciente_id'] = new mongoose_2.Types.ObjectId(dto.paciente_id);
        }
        if (dto.profissional_id !== undefined) {
            raw['profissional_id'] = new mongoose_2.Types.ObjectId(dto.profissional_id);
        }
        if (dto.local_atendimento_id !== undefined) {
            raw['local_atendimento_id'] = new mongoose_2.Types.ObjectId(dto.local_atendimento_id);
        }
        if (dto.agendamento_id !== undefined) {
            raw['agendamento_id'] = dto.agendamento_id
                ? new mongoose_2.Types.ObjectId(dto.agendamento_id)
                : undefined;
        }
        if (dto.data_atendimento !== undefined) {
            raw['data_atendimento'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_atendimento.data_completa));
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
            raw['documentos_anexados'] = this.mapDocumentosAnexados(dto.documentos_anexados);
        }
        return omitUndefined(raw);
    }
    async update(id, dto) {
        const existing = await this.atendimentoModel.findById(id).exec();
        if (!existing) {
            throw new common_1.NotFoundException(`Atendimento com ID ${id} não encontrado`);
        }
        if (existing.status === 'finalizado') {
            throw new common_1.BadRequestException('Atendimento finalizado não pode ser alterado');
        }
        const updateData = this.applyUpdateTransforms(dto);
        const doc = await this.atendimentoModel
            .findByIdAndUpdate(id, { $set: updateData }, { new: true })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Atendimento com ID ${id} não encontrado`);
        }
        return doc;
    }
    async remove(id) {
        const doc = await this.atendimentoModel.findByIdAndDelete(id).exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Atendimento com ID ${id} não encontrado`);
        }
        return doc;
    }
};
exports.AtendimentosService = AtendimentosService;
exports.AtendimentosService = AtendimentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(atendimento_schema_1.Atendimento.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AtendimentosService);
//# sourceMappingURL=atendimentos.service.js.map