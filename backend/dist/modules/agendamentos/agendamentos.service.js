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
exports.AgendamentosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const agendamento_schema_1 = require("./schemas/agendamento.schema");
const data_info_helper_1 = require("../../common/helpers/data-info.helper");
let AgendamentosService = class AgendamentosService {
    agendamentoModel;
    constructor(agendamentoModel) {
        this.agendamentoModel = agendamentoModel;
    }
    async create(dto) {
        if (dto.duracao_minutos % 5 !== 0) {
            throw new common_1.BadRequestException('Duração deve ser múltiplo de 5');
        }
        const inicio = new Date(dto.data_horario_inicio.data_completa);
        const fimDate = dto.data_horario_fim
            ? new Date(dto.data_horario_fim.data_completa)
            : new Date(inicio.getTime() + dto.duracao_minutos * 60000);
        const data = {
            ...dto,
            data_horario_inicio: (0, data_info_helper_1.buildDataInfo)(inicio),
            data_horario_fim: (0, data_info_helper_1.buildDataInfo)(fimDate),
            duracao_personalizada: dto.duracao_personalizada ?? false,
            is_encaixe: dto.is_encaixe ?? false,
        };
        return this.agendamentoModel.create(data);
    }
    async findAll(pagination, filters) {
        const { page = 1, limit = 20 } = pagination;
        const query = {};
        if (filters?.profissional_id)
            query['profissional_id'] = filters.profissional_id;
        if (filters?.local_atendimento_id)
            query['local_atendimento_id'] = filters.local_atendimento_id;
        if (filters?.paciente_id)
            query['paciente_id'] = filters.paciente_id;
        if (filters?.tipo)
            query['tipo'] = filters.tipo;
        if (filters?.status)
            query['status'] = filters.status;
        if (filters?.data_inicio || filters?.data_fim) {
            const dateFilter = {};
            if (filters.data_inicio)
                dateFilter['$gte'] = new Date(filters.data_inicio);
            if (filters.data_fim)
                dateFilter['$lte'] = new Date(filters.data_fim);
            query['data_horario_inicio.data_completa'] = dateFilter;
        }
        const [data, total] = await Promise.all([
            this.agendamentoModel
                .find(query)
                .sort({ 'data_horario_inicio.data_completa': 1 })
                .skip((page - 1) * limit)
                .limit(limit)
                .exec(),
            this.agendamentoModel.countDocuments(query).exec(),
        ]);
        return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async findById(id) {
        const doc = await this.agendamentoModel.findById(id).exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Agendamento com ID ${id} não encontrado`);
        }
        return doc;
    }
    async update(id, dto) {
        const updateData = { ...dto };
        if (dto.data_horario_inicio) {
            updateData['data_horario_inicio'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_horario_inicio.data_completa));
        }
        if (dto.data_horario_fim) {
            updateData['data_horario_fim'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_horario_fim.data_completa));
        }
        const doc = await this.agendamentoModel
            .findByIdAndUpdate(id, { $set: updateData }, { new: true })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Agendamento com ID ${id} não encontrado`);
        }
        return doc;
    }
    async cancel(id) {
        const doc = await this.agendamentoModel
            .findByIdAndUpdate(id, { $set: { status: 'cancelado' } }, { new: true })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Agendamento com ID ${id} não encontrado`);
        }
        return doc;
    }
};
exports.AgendamentosService = AgendamentosService;
exports.AgendamentosService = AgendamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(agendamento_schema_1.Agendamento.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AgendamentosService);
//# sourceMappingURL=agendamentos.service.js.map