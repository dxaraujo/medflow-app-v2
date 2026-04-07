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
exports.FilaEsperaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fila_espera_schema_1 = require("./schemas/fila-espera.schema");
const data_info_helper_1 = require("../../common/helpers/data-info.helper");
let FilaEsperaService = class FilaEsperaService {
    filaModel;
    constructor(filaModel) {
        this.filaModel = filaModel;
    }
    async create(dto) {
        const data = {
            ...dto,
            horario_checkin: (0, data_info_helper_1.buildDataInfo)(new Date(dto.horario_checkin.data_completa)),
        };
        return this.filaModel.create(data);
    }
    async findAll(filters) {
        const query = {};
        if (filters?.profissional_id)
            query['profissional_id'] = filters.profissional_id;
        if (filters?.local_id)
            query['local_id'] = filters.local_id;
        if (filters?.status)
            query['status'] = filters.status;
        const data = await this.filaModel
            .find(query)
            .sort({ posicao_fila: 1 })
            .exec();
        return {
            data,
            total: data.length,
            page: 1,
            limit: data.length,
            totalPages: 1,
        };
    }
    async findById(id) {
        const doc = await this.filaModel.findById(id).exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Registro na fila com ID ${id} não encontrado`);
        }
        return doc;
    }
    async update(id, dto) {
        const updateData = { ...dto };
        if (dto.horario_checkin) {
            updateData['horario_checkin'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.horario_checkin.data_completa));
        }
        const doc = await this.filaModel
            .findByIdAndUpdate(id, { $set: updateData }, { new: true })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Registro na fila com ID ${id} não encontrado`);
        }
        return doc;
    }
};
exports.FilaEsperaService = FilaEsperaService;
exports.FilaEsperaService = FilaEsperaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(fila_espera_schema_1.FilaEspera.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FilaEsperaService);
//# sourceMappingURL=fila-espera.service.js.map