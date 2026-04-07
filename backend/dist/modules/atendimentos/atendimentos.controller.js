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
exports.AtendimentosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const atendimentos_service_1 = require("./atendimentos.service");
const create_atendimento_dto_1 = require("./dto/create-atendimento.dto");
const update_atendimento_dto_1 = require("./dto/update-atendimento.dto");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const parse_object_id_pipe_1 = require("../../common/pipes/parse-object-id.pipe");
const atendimento_schema_1 = require("./schemas/atendimento.schema");
let AtendimentosController = class AtendimentosController {
    atendimentosService;
    constructor(atendimentosService) {
        this.atendimentosService = atendimentosService;
    }
    create(dto) {
        return this.atendimentosService.create(dto);
    }
    findAll(pagination, paciente_id, profissional_id, status, data_inicio, data_fim) {
        return this.atendimentosService.findAll(pagination, {
            paciente_id,
            profissional_id,
            status,
            data_inicio,
            data_fim,
        });
    }
    findOne(id) {
        return this.atendimentosService.findById(id);
    }
    update(id, dto) {
        return this.atendimentosService.update(id, dto);
    }
    remove(id) {
        return this.atendimentosService.remove(id);
    }
};
exports.AtendimentosController = AtendimentosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar atendimento' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_atendimento_dto_1.CreateAtendimentoDto]),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar atendimentos (paginado)' }),
    (0, swagger_1.ApiQuery)({ name: 'paciente_id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'profissional_id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: atendimento_schema_1.STATUS_ATENDIMENTO }),
    (0, swagger_1.ApiQuery)({
        name: 'data_inicio',
        required: false,
        description: 'ISO 8601 — início do período (data_atendimento)',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'data_fim',
        required: false,
        description: 'ISO 8601 — fim do período (data_atendimento)',
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('paciente_id')),
    __param(2, (0, common_1.Query)('profissional_id')),
    __param(3, (0, common_1.Query)('status')),
    __param(4, (0, common_1.Query)('data_inicio')),
    __param(5, (0, common_1.Query)('data_fim')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar atendimento por ID' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar atendimento' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_atendimento_dto_1.UpdateAtendimentoDto]),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover atendimento' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "remove", null);
exports.AtendimentosController = AtendimentosController = __decorate([
    (0, swagger_1.ApiTags)('Atendimentos'),
    (0, common_1.Controller)('atendimentos'),
    __metadata("design:paramtypes", [atendimentos_service_1.AtendimentosService])
], AtendimentosController);
//# sourceMappingURL=atendimentos.controller.js.map