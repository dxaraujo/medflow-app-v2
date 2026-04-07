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
exports.CreateEnderecoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEnderecoDto {
    logradouro;
    numero;
    complemento;
    bairro;
    cidade;
    estado;
    cep;
    pais;
}
exports.CreateEnderecoDto = CreateEnderecoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rua das Flores' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "logradouro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Sala 201' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "complemento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Centro' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "bairro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'São Paulo' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "cidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SP', description: 'UF com 2 caracteres' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01001-000', description: 'Formato 00000-000' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{5}-\d{3}$/, { message: 'CEP deve estar no formato 00000-000' }),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "cep", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Brasil', default: 'Brasil' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEnderecoDto.prototype, "pais", void 0);
//# sourceMappingURL=endereco.dto.js.map