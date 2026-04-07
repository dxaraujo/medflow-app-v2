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
exports.LancamentosReceitaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lancamento_receita_schema_1 = require("./schemas/lancamento-receita.schema");
const data_info_helper_1 = require("../../common/helpers/data-info.helper");
let LancamentosReceitaService = class LancamentosReceitaService {
    lancamentoModel;
    constructor(lancamentoModel) {
        this.lancamentoModel = lancamentoModel;
    }
    async create(dto) {
        const doc = new this.lancamentoModel({
            ...dto,
            tipo: 'receita',
            data_pagamento: (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_pagamento.data_completa)),
        });
        return doc.save();
    }
    async findAll(pagination, filters) {
        const { page = 1, limit = 20 } = pagination;
        const query = {};
        if (filters?.categoria)
            query['categoria'] = filters.categoria;
        if (filters?.status_pagamento)
            query['status_pagamento'] = filters.status_pagamento;
        if (filters?.data_inicio || filters?.data_fim) {
            const dateFilter = {};
            if (filters.data_inicio)
                dateFilter['$gte'] = new Date(filters.data_inicio);
            if (filters.data_fim)
                dateFilter['$lte'] = new Date(filters.data_fim);
            query['data_pagamento.data_completa'] = dateFilter;
        }
        const [data, total] = await Promise.all([
            this.lancamentoModel
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .exec(),
            this.lancamentoModel.countDocuments(query).exec(),
        ]);
        return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async findById(id) {
        const doc = await this.lancamentoModel.findById(id).exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Lançamento com ID ${id} não encontrado`);
        }
        return doc;
    }
    async update(id, dto) {
        const updateData = { ...dto };
        if (dto.data_pagamento) {
            updateData['data_pagamento'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_pagamento.data_completa));
        }
        const doc = await this.lancamentoModel
            .findByIdAndUpdate(id, { $set: updateData }, { new: true })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Lançamento com ID ${id} não encontrado`);
        }
        return doc;
    }
};
exports.LancamentosReceitaService = LancamentosReceitaService;
exports.LancamentosReceitaService = LancamentosReceitaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(lancamento_receita_schema_1.LancamentoReceita.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LancamentosReceitaService);
//# sourceMappingURL=lancamentos-receita.service.js.map