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
exports.CreateLancamentoReceitaDto = exports.DadosParticularReceitaDto = exports.DadosConvenioReceitaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const data_info_dto_1 = require("../../../common/dto/data-info.dto");
class DadosConvenioReceitaDto {
    convenio_id;
    numero_guia;
    codigo_procedimento;
    valor_tabela;
    status_faturamento;
}
exports.DadosConvenioReceitaDto = DadosConvenioReceitaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do convênio' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DadosConvenioReceitaDto.prototype, "convenio_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'GUIA-001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DadosConvenioReceitaDto.prototype, "numero_guia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PROC-001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DadosConvenioReceitaDto.prototype, "codigo_procedimento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 150.0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DadosConvenioReceitaDto.prototype, "valor_tabela", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['pendente', 'enviado', 'pago', 'glosado'] }),
    (0, class_validator_1.IsEnum)(['pendente', 'enviado', 'pago', 'glosado']),
    __metadata("design:type", String)
], DadosConvenioReceitaDto.prototype, "status_faturamento", void 0);
class DadosParticularReceitaDto {
    valor_cobrado;
    valor_pago;
    desconto;
    troco;
}
exports.DadosParticularReceitaDto = DadosParticularReceitaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200.0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DadosParticularReceitaDto.prototype, "valor_cobrado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200.0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DadosParticularReceitaDto.prototype, "valor_pago", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 0, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DadosParticularReceitaDto.prototype, "desconto", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 0, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DadosParticularReceitaDto.prototype, "troco", void 0);
class CreateLancamentoReceitaDto {
    atendimento_id;
    paciente_id;
    profissional_id;
    forma_pagamento;
    dados_convenio;
    dados_particular;
    data_pagamento;
    status_pagamento;
    categoria;
    valor_final;
}
exports.CreateLancamentoReceitaDto = CreateLancamentoReceitaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do atendimento' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLancamentoReceitaDto.prototype, "atendimento_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do paciente' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLancamentoReceitaDto.prototype, "paciente_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do profissional' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLancamentoReceitaDto.prototype, "profissional_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['dinheiro', 'cartao_credito', 'cartao_debito', 'pix', 'convenio'],
    }),
    (0, class_validator_1.IsEnum)(['dinheiro', 'cartao_credito', 'cartao_debito', 'pix', 'convenio']),
    __metadata("design:type", String)
], CreateLancamentoReceitaDto.prototype, "forma_pagamento", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: DadosConvenioReceitaDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DadosConvenioReceitaDto),
    __metadata("design:type", DadosConvenioReceitaDto)
], CreateLancamentoReceitaDto.prototype, "dados_convenio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: DadosParticularReceitaDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DadosParticularReceitaDto),
    __metadata("design:type", DadosParticularReceitaDto)
], CreateLancamentoReceitaDto.prototype, "dados_particular", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], CreateLancamentoReceitaDto.prototype, "data_pagamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['pendente', 'pago', 'parcial', 'cancelado', 'estornado'],
    }),
    (0, class_validator_1.IsEnum)(['pendente', 'pago', 'parcial', 'cancelado', 'estornado']),
    __metadata("design:type", String)
], CreateLancamentoReceitaDto.prototype, "status_pagamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['particular', 'convenio'] }),
    (0, class_validator_1.IsEnum)(['particular', 'convenio']),
    __metadata("design:type", String)
], CreateLancamentoReceitaDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200.0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLancamentoReceitaDto.prototype, "valor_final", void 0);
//# sourceMappingURL=create-lancamento-receita.dto.js.map