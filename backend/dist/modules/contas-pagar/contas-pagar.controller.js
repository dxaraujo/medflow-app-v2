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
exports.ContasPagarController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const contas_pagar_service_1 = require("./contas-pagar.service");
const create_conta_pagar_dto_1 = require("./dto/create-conta-pagar.dto");
const update_conta_pagar_dto_1 = require("./dto/update-conta-pagar.dto");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const parse_object_id_pipe_1 = require("../../common/pipes/parse-object-id.pipe");
let ContasPagarController = class ContasPagarController {
    contasPagarService;
    constructor(contasPagarService) {
        this.contasPagarService = contasPagarService;
    }
    create(dto) {
        return this.contasPagarService.create(dto);
    }
    findAll(pagination, status, categoria_despesa, data_inicio, data_fim) {
        return this.contasPagarService.findAll(pagination, {
            status,
            categoria_despesa,
            data_inicio,
            data_fim,
        });
    }
    findOne(id) {
        return this.contasPagarService.findById(id);
    }
    update(id, dto) {
        return this.contasPagarService.update(id, dto);
    }
    remove(id) {
        return this.contasPagarService.cancel(id);
    }
};
exports.ContasPagarController = ContasPagarController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar conta a pagar' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_conta_pagar_dto_1.CreateContaPagarDto]),
    __metadata("design:returntype", void 0)
], ContasPagarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar contas a pagar (paginado)' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'categoria_despesa', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'data_inicio', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'data_fim', required: false }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('categoria_despesa')),
    __param(3, (0, common_1.Query)('data_inicio')),
    __param(4, (0, common_1.Query)('data_fim')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ContasPagarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar conta a pagar por ID' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContasPagarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar conta a pagar' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_conta_pagar_dto_1.UpdateContaPagarDto]),
    __metadata("design:returntype", void 0)
], ContasPagarController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancelar conta a pagar' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContasPagarController.prototype, "remove", null);
exports.ContasPagarController = ContasPagarController = __decorate([
    (0, swagger_1.ApiTags)('Contas a Pagar'),
    (0, common_1.Controller)('contas-pagar'),
    __metadata("design:paramtypes", [contas_pagar_service_1.ContasPagarService])
], ContasPagarController);
//# sourceMappingURL=contas-pagar.controller.js.map