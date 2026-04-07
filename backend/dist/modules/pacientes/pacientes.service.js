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
exports.PacientesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const paciente_schema_1 = require("./schemas/paciente.schema");
const data_info_helper_1 = require("../../common/helpers/data-info.helper");
let PacientesService = class PacientesService {
    pacienteModel;
    constructor(pacienteModel) {
        this.pacienteModel = pacienteModel;
    }
    async create(dto) {
        const existing = await this.pacienteModel.findOne({ cpf: dto.cpf }).exec();
        if (existing) {
            throw new common_1.ConflictException(`Paciente com CPF ${dto.cpf} já cadastrado`);
        }
        const data = {
            ...dto,
            data_nascimento: (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_nascimento.data_completa)),
            convenios: dto.convenios?.map((c) => ({
                ...c,
                validade: c.validade
                    ? (0, data_info_helper_1.buildDataInfo)(new Date(c.validade.data_completa))
                    : undefined,
            })),
        };
        return this.pacienteModel.create(data);
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
            this.pacienteModel
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .exec(),
            this.pacienteModel.countDocuments(query).exec(),
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
        const paciente = await this.pacienteModel.findById(id).exec();
        if (!paciente) {
            throw new common_1.NotFoundException(`Paciente com ID ${id} não encontrado`);
        }
        return paciente;
    }
    async update(id, dto) {
        const updateData = { ...dto };
        if (dto.data_nascimento) {
            updateData['data_nascimento'] = (0, data_info_helper_1.buildDataInfo)(new Date(dto.data_nascimento.data_completa));
        }
        const paciente = await this.pacienteModel
            .findByIdAndUpdate(id, { $set: updateData }, { new: true })
            .exec();
        if (!paciente) {
            throw new common_1.NotFoundException(`Paciente com ID ${id} não encontrado`);
        }
        return paciente;
    }
    async remove(id) {
        const paciente = await this.pacienteModel
            .findByIdAndUpdate(id, { $set: { ativo: false } }, { new: true })
            .exec();
        if (!paciente) {
            throw new common_1.NotFoundException(`Paciente com ID ${id} não encontrado`);
        }
        return paciente;
    }
};
exports.PacientesService = PacientesService;
exports.PacientesService = PacientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(paciente_schema_1.Paciente.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PacientesService);
//# sourceMappingURL=pacientes.service.js.map