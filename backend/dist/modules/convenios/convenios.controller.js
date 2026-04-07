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
exports.ConveniosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const convenios_service_1 = require("./convenios.service");
const create_convenio_dto_1 = require("./dto/create-convenio.dto");
const update_convenio_dto_1 = require("./dto/update-convenio.dto");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const parse_object_id_pipe_1 = require("../../common/pipes/parse-object-id.pipe");
let ConveniosController = class ConveniosController {
    conveniosService;
    constructor(conveniosService) {
        this.conveniosService = conveniosService;
    }
    create(dto) {
        return this.conveniosService.create(dto);
    }
    findAll(pagination, search, ativo) {
        const filters = {
            search,
            ativo: ativo !== undefined ? ativo === 'true' : undefined,
        };
        return this.conveniosService.findAll(pagination, filters);
    }
    findOne(id) {
        return this.conveniosService.findById(id);
    }
    update(id, dto) {
        return this.conveniosService.update(id, dto);
    }
    remove(id) {
        return this.conveniosService.remove(id);
    }
};
exports.ConveniosController = ConveniosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar convênio' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_convenio_dto_1.CreateConvenioDto]),
    __metadata("design:returntype", void 0)
], ConveniosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar convênios (paginado)' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'ativo', required: false, type: Boolean }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('ativo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, String, String]),
    __metadata("design:returntype", void 0)
], ConveniosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar convênio por ID' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConveniosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar convênio' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_convenio_dto_1.UpdateConvenioDto]),
    __metadata("design:returntype", void 0)
], ConveniosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Desativar convênio (soft delete)' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConveniosController.prototype, "remove", null);
exports.ConveniosController = ConveniosController = __decorate([
    (0, swagger_1.ApiTags)('Convênios'),
    (0, common_1.Controller)('convenios'),
    __metadata("design:paramtypes", [convenios_service_1.ConveniosService])
], ConveniosController);
//# sourceMappingURL=convenios.controller.js.map