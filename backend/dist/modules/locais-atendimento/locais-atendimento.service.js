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
exports.LocaisAtendimentoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const local_atendimento_schema_1 = require("./schemas/local-atendimento.schema");
let LocaisAtendimentoService = class LocaisAtendimentoService {
    localAtendimentoModel;
    constructor(localAtendimentoModel) {
        this.localAtendimentoModel = localAtendimentoModel;
    }
    mapConfiguracoes(items) {
        return items.map((c) => ({
            ...c,
            profissional_id: new mongoose_2.Types.ObjectId(c.profissional_id),
            horarios_funcionamento: c.horarios_funcionamento ?? [],
        }));
    }
    async create(dto) {
        const data = {
            ...dto,
            configuracoes_profissionais: dto.configuracoes_profissionais?.length
                ? this.mapConfiguracoes(dto.configuracoes_profissionais)
                : [],
        };
        return this.localAtendimentoModel.create(data);
    }
    async findAll(pagination, filters) {
        const { page = 1, limit = 20 } = pagination;
        const query = {};
        if (filters?.ativo !== undefined) {
            query['ativo'] = filters.ativo;
        }
        if (filters?.search) {
            query['$text'] = { $search: filters.search };
        }
        const [data, total] = await Promise.all([
            this.localAtendimentoModel
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .exec(),
            this.localAtendimentoModel.countDocuments(query).exec(),
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
        const local = await this.localAtendimentoModel.findById(id).exec();
        if (!local) {
            throw new common_1.NotFoundException(`Local de atendimento com ID ${id} não encontrado`);
        }
        return local;
    }
    async update(id, dto) {
        const updateData = { ...dto };
        if (dto.configuracoes_profissionais !== undefined) {
            updateData['configuracoes_profissionais'] = dto
                .configuracoes_profissionais.length
                ? this.mapConfiguracoes(dto.configuracoes_profissionais)
                : [];
        }
        const local = await this.localAtendimentoModel
            .findByIdAndUpdate(id, { $set: updateData }, { new: true })
            .exec();
        if (!local) {
            throw new common_1.NotFoundException(`Local de atendimento com ID ${id} não encontrado`);
        }
        return local;
    }
    async remove(id) {
        const local = await this.localAtendimentoModel
            .findByIdAndUpdate(id, { $set: { ativo: false } }, { new: true })
            .exec();
        if (!local) {
            throw new common_1.NotFoundException(`Local de atendimento com ID ${id} não encontrado`);
        }
        return local;
    }
};
exports.LocaisAtendimentoService = LocaisAtendimentoService;
exports.LocaisAtendimentoService = LocaisAtendimentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(local_atendimento_schema_1.LocalAtendimento.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LocaisAtendimentoService);
//# sourceMappingURL=locais-atendimento.service.js.map