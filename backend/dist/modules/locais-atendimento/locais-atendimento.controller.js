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
exports.LocaisAtendimentoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const locais_atendimento_service_1 = require("./locais-atendimento.service");
const create_local_atendimento_dto_1 = require("./dto/create-local-atendimento.dto");
const update_local_atendimento_dto_1 = require("./dto/update-local-atendimento.dto");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const parse_object_id_pipe_1 = require("../../common/pipes/parse-object-id.pipe");
let LocaisAtendimentoController = class LocaisAtendimentoController {
    locaisAtendimentoService;
    constructor(locaisAtendimentoService) {
        this.locaisAtendimentoService = locaisAtendimentoService;
    }
    create(dto) {
        return this.locaisAtendimentoService.create(dto);
    }
    findAll(pagination, search, ativo) {
        const filters = {
            search,
            ativo: ativo !== undefined ? ativo === 'true' : undefined,
        };
        return this.locaisAtendimentoService.findAll(pagination, filters);
    }
    findOne(id) {
        return this.locaisAtendimentoService.findById(id);
    }
    update(id, dto) {
        return this.locaisAtendimentoService.update(id, dto);
    }
    remove(id) {
        return this.locaisAtendimentoService.remove(id);
    }
};
exports.LocaisAtendimentoController = LocaisAtendimentoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar local de atendimento' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_local_atendimento_dto_1.CreateLocalAtendimentoDto]),
    __metadata("design:returntype", void 0)
], LocaisAtendimentoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar locais de atendimento (paginado)' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'ativo', required: false, type: Boolean }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('ativo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, String, String]),
    __metadata("design:returntype", void 0)
], LocaisAtendimentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar local de atendimento por ID' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocaisAtendimentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar local de atendimento' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_local_atendimento_dto_1.UpdateLocalAtendimentoDto]),
    __metadata("design:returntype", void 0)
], LocaisAtendimentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Desativar local de atendimento (soft delete)' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocaisAtendimentoController.prototype, "remove", null);
exports.LocaisAtendimentoController = LocaisAtendimentoController = __decorate([
    (0, swagger_1.ApiTags)('Locais de Atendimento'),
    (0, common_1.Controller)('locais-atendimento'),
    __metadata("design:paramtypes", [locais_atendimento_service_1.LocaisAtendimentoService])
], LocaisAtendimentoController);
//# sourceMappingURL=locais-atendimento.controller.js.map