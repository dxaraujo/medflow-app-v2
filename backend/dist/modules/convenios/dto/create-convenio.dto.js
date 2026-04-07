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
exports.CreateConvenioDto = exports.TabelaProcedimentoDto = exports.ContatoConvenioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ContatoConvenioDto {
    telefone;
    email;
    representante;
}
exports.ContatoConvenioDto = ContatoConvenioDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '(11) 3000-0000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContatoConvenioDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'contato@operadora.com.br' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContatoConvenioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Maria Souza' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContatoConvenioDto.prototype, "representante", void 0);
class TabelaProcedimentoDto {
    codigo;
    descricao;
    valor;
}
exports.TabelaProcedimentoDto = TabelaProcedimentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10101012' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TabelaProcedimentoDto.prototype, "codigo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Consulta em consultório' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TabelaProcedimentoDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 120.5 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TabelaProcedimentoDto.prototype, "valor", void 0);
class CreateConvenioDto {
    nome_convenio;
    codigo_ans;
    contato;
    tabela_procedimentos;
    ativo;
}
exports.CreateConvenioDto = CreateConvenioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Unimed' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConvenioDto.prototype, "nome_convenio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '123456',
        description: 'Código ANS da operadora',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConvenioDto.prototype, "codigo_ans", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: ContatoConvenioDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContatoConvenioDto),
    __metadata("design:type", ContatoConvenioDto)
], CreateConvenioDto.prototype, "contato", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [TabelaProcedimentoDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TabelaProcedimentoDto),
    __metadata("design:type", Array)
], CreateConvenioDto.prototype, "tabela_procedimentos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConvenioDto.prototype, "ativo", void 0);
//# sourceMappingURL=create-convenio.dto.js.map