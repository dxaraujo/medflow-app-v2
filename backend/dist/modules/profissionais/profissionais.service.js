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
exports.ProfissionaisService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const profissional_schema_1 = require("./schemas/profissional.schema");
let ProfissionaisService = class ProfissionaisService {
    profissionalModel;
    constructor(profissionalModel) {
        this.profissionalModel = profissionalModel;
    }
    async create(dto) {
        const existing = await this.profissionalModel
            .findOne({ cpf: dto.cpf })
            .exec();
        if (existing) {
            throw new common_1.ConflictException(`Profissional com CPF ${dto.cpf} já cadastrado`);
        }
        if (dto.perfil === 'medico' && !dto.registro_profissional) {
            throw new common_1.BadRequestException('Registro profissional é obrigatório para médicos');
        }
        return this.profissionalModel.create(dto);
    }
    async findAll(pagination, filters) {
        const { page = 1, limit = 20 } = pagination;
        const query = {};
        if (filters?.perfil)
            query['perfil'] = filters.perfil;
        if (filters?.ativo !== undefined)
            query['ativo'] = filters.ativo;
        if (filters?.search)
            query['$text'] = { $search: filters.search };
        const [data, total] = await Promise.all([
            this.profissionalModel
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .exec(),
            this.profissionalModel.countDocuments(query).exec(),
        ]);
        return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async findById(id) {
        const doc = await this.profissionalModel.findById(id).exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Profissional com ID ${id} não encontrado`);
        }
        return doc;
    }
    async update(id, dto) {
        const doc = await this.profissionalModel
            .findByIdAndUpdate(id, { $set: dto }, { new: true })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Profissional com ID ${id} não encontrado`);
        }
        return doc;
    }
    async remove(id) {
        const doc = await this.profissionalModel
            .findByIdAndUpdate(id, { $set: { ativo: false } }, { new: true })
            .exec();
        if (!doc) {
            throw new common_1.NotFoundException(`Profissional com ID ${id} não encontrado`);
        }
        return doc;
    }
};
exports.ProfissionaisService = ProfissionaisService;
exports.ProfissionaisService = ProfissionaisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(profissional_schema_1.Profissional.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProfissionaisService);
//# sourceMappingURL=profissionais.service.js.map