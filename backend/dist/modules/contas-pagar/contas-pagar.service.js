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
exports.ContasPagarService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const conta_pagar_schema_1 = require("./schemas/conta-pagar.schema");
const data_info_helper_1 = require("../../common/helpers/data-info.helper");
let ContasPagarService = class ContasPagarService {
    contaModel;
    constructor(contaModel) {
        this.contaModel = contaModel;
    }
    async create(dto) {
        const data = {
            ...dto,
            tipo: 'despesa',
            data_vencimento: (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_vencimento.data_completa)),
        };
        if (dto.data_pagamento) {
            data['data_pagamento'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_pagamento.data_completa));
        }
        return this.contaModel.create(data);
    }
    async findAll(pagination, filters) {
        const { page = 1, limit = 20 } = pagination;
        const query = {};
        if (filters?.status)
            query['status'] = filters.status;
        if (filters?.categoria_despesa)
            query['categoria_despesa'] = filters.categoria_despesa;
        if (filters?.data_inicio || filters?.data_fim) {
            const dateFilter = {};
            if (filters.data_inicio)
                dateFilter['$gte'] = new Date(filters.data_inicio);
            if (filters.data_fim)
                dateFilter['$lte'] = new Date(filters.data_fim);
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
    async findById(id) {
        const doc = await this.contaModel.findById(id).exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Conta a pagar com ID ${id} não encontrada`);
        }
        return doc;
    }
    async update(id, dto) {
        const updateData = { ...dto };
        if (dto.data_vencimento) {
            updateData['data_vencimento'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_vencimento.data_completa));
        }
        if (dto.data_pagamento) {
            updateData['data_pagamento'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_pagamento.data_completa));
        }
        const doc = await this.contaModel
            .findByIdAndUpdate(id, { $set: updateData }, { new: true })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Conta a pagar com ID ${id} não encontrada`);
        }
        return doc;
    }
    async cancel(id) {
        const doc = await this.contaModel
            .findByIdAndUpdate(id, { $set: { status: 'cancelado' } }, { new: true })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Conta a pagar com ID ${id} não encontrada`);
        }
        return doc;
    }
};
exports.ContasPagarService = ContasPagarService;
exports.ContasPagarService = ContasPagarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(conta_pagar_schema_1.ContaPagar.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContasPagarService);
//# sourceMappingURL=contas-pagar.service.js.map