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
exports.CreateProfissionalDto = exports.RegistroProfissionalDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const contato_dto_1 = require("../../../common/dto/contato.dto");
class RegistroProfissionalDto {
    crm;
    uf_crm;
    especialidades;
}
exports.RegistroProfissionalDto = RegistroProfissionalDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegistroProfissionalDto.prototype, "crm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SP', description: 'UF do CRM' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], RegistroProfissionalDto.prototype, "uf_crm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: ['Cardiologia', 'Clínica Geral'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], RegistroProfissionalDto.prototype, "especialidades", void 0);
class CreateProfissionalDto {
    nome_completo;
    cpf;
    perfil;
    registro_profissional;
    contato;
    locais_vinculados;
    ativo;
}
exports.CreateProfissionalDto = CreateProfissionalDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dr. Carlos Souza' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProfissionalDto.prototype, "nome_completo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '98765432100', description: '11 dígitos' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(11, 11),
    (0, class_validator_1.Matches)(/^\d{11}$/, {
        message: 'CPF deve conter exatamente 11 dígitos numéricos',
    }),
    __metadata("design:type", String)
], CreateProfissionalDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['medico', 'atendente'] }),
    (0, class_validator_1.IsEnum)(['medico', 'atendente']),
    __metadata("design:type", String)
], CreateProfissionalDto.prototype, "perfil", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: RegistroProfissionalDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RegistroProfissionalDto),
    __metadata("design:type", RegistroProfissionalDto)
], CreateProfissionalDto.prototype, "registro_profissional", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: contato_dto_1.CreateContatoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contato_dto_1.CreateContatoDto),
    __metadata("design:type", contato_dto_1.CreateContatoDto)
], CreateProfissionalDto.prototype, "contato", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: [],
        description: 'IDs dos locais vinculados',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateProfissionalDto.prototype, "locais_vinculados", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProfissionalDto.prototype, "ativo", void 0);
//# sourceMappingURL=create-profissional.dto.js.map