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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnamneseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_anamnese_dto_1 = require("./create-anamnese.dto");
class UpdateAnamneseDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(create_anamnese_dto_1.CreateAnamneseDto, ['paciente_id'])) {
    profissional_id;
    motivo;
}
exports.UpdateAnamneseDto = UpdateAnamneseDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Obrigatório quando houver alterações em campos da anamnese (auditoria)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAnamneseDto.prototype, "profissional_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAnamneseDto.prototype, "motivo", void 0);
//# sourceMappingURL=update-anamnese.dto.js.map