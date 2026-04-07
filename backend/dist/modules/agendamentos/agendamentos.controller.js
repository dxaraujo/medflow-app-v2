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
exports.AgendamentosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const agendamentos_service_1 = require("./agendamentos.service");
const create_agendamento_dto_1 = require("./dto/create-agendamento.dto");
const update_agendamento_dto_1 = require("./dto/update-agendamento.dto");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const parse_object_id_pipe_1 = require("../../common/pipes/parse-object-id.pipe");
let AgendamentosController = class AgendamentosController {
    agendamentosService;
    constructor(agendamentosService) {
        this.agendamentosService = agendamentosService;
    }
    create(dto) {
        return this.agendamentosService.create(dto);
    }
    findAll(pagination, profissional_id, local_id, paciente_id, tipo, status, data_inicio, data_fim) {
        return this.agendamentosService.findAll(pagination, {
            profissional_id,
            local_id,
            paciente_id,
            tipo,
            status,
            data_inicio,
            data_fim,
        });
    }
    findOne(id) {
        return this.agendamentosService.findById(id);
    }
    update(id, dto) {
        return this.agendamentosService.update(id, dto);
    }
    remove(id) {
        return this.agendamentosService.cancel(id);
    }
};
exports.AgendamentosController = AgendamentosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar agendamento ou bloqueio' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agendamento_dto_1.CreateAgendamentoDto]),
    __metadata("design:returntype", void 0)
], AgendamentosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar agendamentos (paginado)' }),
    (0, swagger_1.ApiQuery)({ name: 'profissional_id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'local_id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'paciente_id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'tipo', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'data_inicio', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'data_fim', required: false }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('profissional_id')),
    __param(2, (0, common_1.Query)('local_id')),
    __param(3, (0, common_1.Query)('paciente_id')),
    __param(4, (0, common_1.Query)('tipo')),
    __param(5, (0, common_1.Query)('status')),
    __param(6, (0, common_1.Query)('data_inicio')),
    __param(7, (0, common_1.Query)('data_fim')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, String, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], AgendamentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar agendamento por ID' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgendamentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar agendamento' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_agendamento_dto_1.UpdateAgendamentoDto]),
    __metadata("design:returntype", void 0)
], AgendamentosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancelar agendamento' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AgendamentosController.prototype, "remove", null);
exports.AgendamentosController = AgendamentosController = __decorate([
    (0, swagger_1.ApiTags)('Agendamentos'),
    (0, common_1.Controller)('agendamentos'),
    __metadata("design:paramtypes", [agendamentos_service_1.AgendamentosService])
], AgendamentosController);
//# sourceMappingURL=agendamentos.controller.js.map