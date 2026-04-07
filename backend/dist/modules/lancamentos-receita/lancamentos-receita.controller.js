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
exports.LancamentosReceitaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lancamentos_receita_service_1 = require("./lancamentos-receita.service");
const create_lancamento_receita_dto_1 = require("./dto/create-lancamento-receita.dto");
const update_lancamento_receita_dto_1 = require("./dto/update-lancamento-receita.dto");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const parse_object_id_pipe_1 = require("../../common/pipes/parse-object-id.pipe");
let LancamentosReceitaController = class LancamentosReceitaController {
    lancamentosReceitaService;
    constructor(lancamentosReceitaService) {
        this.lancamentosReceitaService = lancamentosReceitaService;
    }
    create(dto) {
        return this.lancamentosReceitaService.create(dto);
    }
    findAll(pagination, categoria, status_pagamento, data_inicio, data_fim) {
        return this.lancamentosReceitaService.findAll(pagination, {
            categoria,
            status_pagamento,
            data_inicio,
            data_fim,
        });
    }
    findOne(id) {
        return this.lancamentosReceitaService.findById(id);
    }
    update(id, dto) {
        return this.lancamentosReceitaService.update(id, dto);
    }
};
exports.LancamentosReceitaController = LancamentosReceitaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar lançamento de receita' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lancamento_receita_dto_1.CreateLancamentoReceitaDto]),
    __metadata("design:returntype", void 0)
], LancamentosReceitaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar lançamentos de receita (paginado)' }),
    (0, swagger_1.ApiQuery)({
        name: 'categoria',
        required: false,
        enum: ['particular', 'convenio'],
    }),
    (0, swagger_1.ApiQuery)({ name: 'status_pagamento', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'data_inicio', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'data_fim', required: false }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('categoria')),
    __param(2, (0, common_1.Query)('status_pagamento')),
    __param(3, (0, common_1.Query)('data_inicio')),
    __param(4, (0, common_1.Query)('data_fim')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, String, String, String, String]),
    __metadata("design:returntype", void 0)
], LancamentosReceitaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar lançamento por ID' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LancamentosReceitaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar lançamento de receita' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lancamento_receita_dto_1.UpdateLancamentoReceitaDto]),
    __metadata("design:returntype", void 0)
], LancamentosReceitaController.prototype, "update", null);
exports.LancamentosReceitaController = LancamentosReceitaController = __decorate([
    (0, swagger_1.ApiTags)('Lançamentos de Receita'),
    (0, common_1.Controller)('lancamentos-receita'),
    __metadata("design:paramtypes", [lancamentos_receita_service_1.LancamentosReceitaService])
], LancamentosReceitaController);
//# sourceMappingURL=lancamentos-receita.controller.js.map