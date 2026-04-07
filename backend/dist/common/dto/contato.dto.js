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
exports.CreateContatoDto = exports.ContatoEmergenciaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ContatoEmergenciaDto {
    nome;
    parentesco;
    telefone;
}
exports.ContatoEmergenciaDto = ContatoEmergenciaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Maria Silva' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContatoEmergenciaDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Mãe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContatoEmergenciaDto.prototype, "parentesco", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '(11) 99999-0000' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContatoEmergenciaDto.prototype, "telefone", void 0);
class CreateContatoDto {
    telefone_principal;
    telefone_secundario;
    email;
    contato_emergencia;
}
exports.CreateContatoDto = CreateContatoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '(11) 99999-1234', description: 'Telefone com DDD' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContatoDto.prototype, "telefone_principal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '(11) 98888-5678' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContatoDto.prototype, "telefone_secundario", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'paciente@email.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateContatoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: ContatoEmergenciaDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContatoEmergenciaDto),
    __metadata("design:type", ContatoEmergenciaDto)
], CreateContatoDto.prototype, "contato_emergencia", void 0);
//# sourceMappingURL=contato.dto.js.map