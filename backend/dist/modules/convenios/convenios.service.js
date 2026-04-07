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
exports.ConveniosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const convenio_schema_1 = require("./schemas/convenio.schema");
let ConveniosService = class ConveniosService {
    convenioModel;
    constructor(convenioModel) {
        this.convenioModel = convenioModel;
    }
    async create(dto) {
        if (dto.codigo_ans) {
            const existing = await this.convenioModel
                .findOne({ codigo_ans: dto.codigo_ans })
                .exec();
            if (existing) {
                throw new common_1.ConflictException(`Convênio com código ANS ${dto.codigo_ans} já cadastrado`);
            }
        }
        return this.convenioModel.create(dto);
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
            this.convenioModel
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .exec(),
            this.convenioModel.countDocuments(query).exec(),
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
        const convenio = await this.convenioModel.findById(id).exec();
        if (!convenio) {
            throw new common_1.NotFoundException(`Convênio com ID ${id} não encontrado`);
        }
        return convenio;
    }
    async update(id, dto) {
        if (dto.codigo_ans) {
            const duplicate = await this.convenioModel
                .findOne({ codigo_ans: dto.codigo_ans, _id: { $ne: id } })
                .exec();
            if (duplicate) {
                throw new common_1.ConflictException(`Convênio com código ANS ${dto.codigo_ans} já cadastrado`);
            }
        }
        const convenio = await this.convenioModel
            .findByIdAndUpdate(id, { $set: dto }, { new: true })
            .exec();
        if (!convenio) {
            throw new common_1.NotFoundException(`Convênio com ID ${id} não encontrado`);
        }
        return convenio;
    }
    async remove(id) {
        const convenio = await this.convenioModel
            .findByIdAndUpdate(id, { $set: { ativo: false } }, { new: true })
            .exec();
        if (!convenio) {
            throw new common_1.NotFoundException(`Convênio com ID ${id} não encontrado`);
        }
        return convenio;
    }
};
exports.ConveniosService = ConveniosService;
exports.ConveniosService = ConveniosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(convenio_schema_1.Convenio.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ConveniosService);
//# sourceMappingURL=convenios.service.js.map