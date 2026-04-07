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
exports.ProfissionaisController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const profissionais_service_1 = require("./profissionais.service");
const create_profissional_dto_1 = require("./dto/create-profissional.dto");
const update_profissional_dto_1 = require("./dto/update-profissional.dto");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const parse_object_id_pipe_1 = require("../../common/pipes/parse-object-id.pipe");
let ProfissionaisController = class ProfissionaisController {
    profissionaisService;
    constructor(profissionaisService) {
        this.profissionaisService = profissionaisService;
    }
    create(dto) {
        return this.profissionaisService.create(dto);
    }
    findAll(pagination, perfil, ativo, search) {
        return this.profissionaisService.findAll(pagination, {
            perfil,
            ativo: ativo !== undefined ? ativo === 'true' : undefined,
            search,
        });
    }
    findOne(id) {
        return this.profissionaisService.findById(id);
    }
    update(id, dto) {
        return this.profissionaisService.update(id, dto);
    }
    remove(id) {
        return this.profissionaisService.remove(id);
    }
};
exports.ProfissionaisController = ProfissionaisController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar profissional' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profissional_dto_1.CreateProfissionalDto]),
    __metadata("design:returntype", void 0)
], ProfissionaisController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar profissionais (paginado)' }),
    (0, swagger_1.ApiQuery)({ name: 'perfil', required: false, enum: ['medico', 'atendente'] }),
    (0, swagger_1.ApiQuery)({ name: 'ativo', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('perfil')),
    __param(2, (0, common_1.Query)('ativo')),
    __param(3, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, String, String, String]),
    __metadata("design:returntype", void 0)
], ProfissionaisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar profissional por ID' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfissionaisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar profissional' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_profissional_dto_1.UpdateProfissionalDto]),
    __metadata("design:returntype", void 0)
], ProfissionaisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Desativar profissional (soft delete)' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfissionaisController.prototype, "remove", null);
exports.ProfissionaisController = ProfissionaisController = __decorate([
    (0, swagger_1.ApiTags)('Profissionais'),
    (0, common_1.Controller)('profissionais'),
    __metadata("design:paramtypes", [profissionais_service_1.ProfissionaisService])
], ProfissionaisController);
//# sourceMappingURL=profissionais.controller.js.map