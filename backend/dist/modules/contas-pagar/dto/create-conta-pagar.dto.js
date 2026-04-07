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
exports.CreateContaPagarDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const data_info_dto_1 = require("../../../common/dto/data-info.dto");
class CreateContaPagarDto {
    descricao;
    fornecedor;
    categoria_despesa;
    valor;
    data_vencimento;
    data_pagamento;
    status;
    forma_pagamento;
    recorrente;
    observacoes;
    categoria;
}
exports.CreateContaPagarDto = CreateContaPagarDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Aluguel do consultório - Março' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContaPagarDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Imobiliária XYZ' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContaPagarDto.prototype, "fornecedor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['aluguel', 'material', 'salario', 'servico', 'imposto', 'outro'],
    }),
    (0, class_validator_1.IsEnum)(['aluguel', 'material', 'salario', 'servico', 'imposto', 'outro']),
    __metadata("design:type", String)
], CreateContaPagarDto.prototype, "categoria_despesa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3500.0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateContaPagarDto.prototype, "valor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], CreateContaPagarDto.prototype, "data_vencimento", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], CreateContaPagarDto.prototype, "data_pagamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['pendente', 'pago', 'vencido', 'cancelado'] }),
    (0, class_validator_1.IsEnum)(['pendente', 'pago', 'vencido', 'cancelado']),
    __metadata("design:type", String)
], CreateContaPagarDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'PIX' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContaPagarDto.prototype, "forma_pagamento", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateContaPagarDto.prototype, "recorrente", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContaPagarDto.prototype, "observacoes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'despesas_fixas',
        description: 'Categoria para agregação',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContaPagarDto.prototype, "categoria", void 0);
//# sourceMappingURL=create-conta-pagar.dto.js.map