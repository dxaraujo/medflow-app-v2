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
exports.FilaEsperaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const fila_espera_service_1 = require("./fila-espera.service");
const create_fila_espera_dto_1 = require("./dto/create-fila-espera.dto");
const update_fila_espera_dto_1 = require("./dto/update-fila-espera.dto");
const parse_object_id_pipe_1 = require("../../common/pipes/parse-object-id.pipe");
let FilaEsperaController = class FilaEsperaController {
    filaEsperaService;
    constructor(filaEsperaService) {
        this.filaEsperaService = filaEsperaService;
    }
    create(dto) {
        return this.filaEsperaService.create(dto);
    }
    findAll(profissional_id, local_atendimento_id, status) {
        return this.filaEsperaService.findAll({
            profissional_id,
            local_atendimento_id,
            status,
        });
    }
    update(id, dto) {
        return this.filaEsperaService.update(id, dto);
    }
};
exports.FilaEsperaController = FilaEsperaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Check-in na fila de espera' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fila_espera_dto_1.CreateFilaEsperaDto]),
    __metadata("design:returntype", void 0)
], FilaEsperaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar fila de espera' }),
    (0, swagger_1.ApiQuery)({ name: 'profissional_id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'local_atendimento_id', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false }),
    __param(0, (0, common_1.Query)('profissional_id')),
    __param(1, (0, common_1.Query)('local_atendimento_id')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], FilaEsperaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar status na fila' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fila_espera_dto_1.UpdateFilaEsperaDto]),
    __metadata("design:returntype", void 0)
], FilaEsperaController.prototype, "update", null);
exports.FilaEsperaController = FilaEsperaController = __decorate([
    (0, swagger_1.ApiTags)('Fila de Espera'),
    (0, common_1.Controller)('fila-espera'),
    __metadata("design:paramtypes", [fila_espera_service_1.FilaEsperaService])
], FilaEsperaController);
//# sourceMappingURL=fila-espera.controller.js.map