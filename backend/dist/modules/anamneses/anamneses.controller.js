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
exports.AnamnesesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const anamneses_service_1 = require("./anamneses.service");
const create_anamnese_dto_1 = require("./dto/create-anamnese.dto");
const update_anamnese_dto_1 = require("./dto/update-anamnese.dto");
const parse_object_id_pipe_1 = require("../../common/pipes/parse-object-id.pipe");
let AnamnesesController = class AnamnesesController {
    anamnesesService;
    constructor(anamnesesService) {
        this.anamnesesService = anamnesesService;
    }
    create(dto) {
        return this.anamnesesService.create(dto);
    }
    findByPaciente(pacienteId) {
        return this.anamnesesService.findByPacienteId(pacienteId);
    }
    update(id, dto) {
        return this.anamnesesService.update(id, dto);
    }
};
exports.AnamnesesController = AnamnesesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar anamnese' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_anamnese_dto_1.CreateAnamneseDto]),
    __metadata("design:returntype", void 0)
], AnamnesesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('paciente/:pacienteId'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar anamnese por paciente' }),
    __param(0, (0, common_1.Param)('pacienteId', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnamnesesController.prototype, "findByPaciente", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar anamnese' }),
    __param(0, (0, common_1.Param)('id', parse_object_id_pipe_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_anamnese_dto_1.UpdateAnamneseDto]),
    __metadata("design:returntype", void 0)
], AnamnesesController.prototype, "update", null);
exports.AnamnesesController = AnamnesesController = __decorate([
    (0, swagger_1.ApiTags)('Anamneses'),
    (0, common_1.Controller)('anamneses'),
    __metadata("design:paramtypes", [anamneses_service_1.AnamnesesService])
], AnamnesesController);
//# sourceMappingURL=anamneses.controller.js.map