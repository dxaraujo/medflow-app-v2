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
exports.CreatePacienteDto = exports.ConvenioPacienteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const data_info_dto_1 = require("../../../common/dto/data-info.dto");
const contato_dto_1 = require("../../../common/dto/contato.dto");
const endereco_dto_1 = require("../../../common/dto/endereco.dto");
class ConvenioPacienteDto {
    convenio_id;
    numero_carteirinha;
    validade;
    plano;
}
exports.ConvenioPacienteDto = ConvenioPacienteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do convênio' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConvenioPacienteDto.prototype, "convenio_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456789' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConvenioPacienteDto.prototype, "numero_carteirinha", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], ConvenioPacienteDto.prototype, "validade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Enfermaria' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConvenioPacienteDto.prototype, "plano", void 0);
class CreatePacienteDto {
    nome_completo;
    data_nascimento;
    sexo;
    cpf;
    rg;
    nome_mae;
    naturalidade;
    contato;
    endereco;
    convenios;
    ativo;
}
exports.CreatePacienteDto = CreatePacienteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'João da Silva' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "nome_completo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], CreatePacienteDto.prototype, "data_nascimento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['masculino', 'feminino', 'intersexo'] }),
    (0, class_validator_1.IsEnum)(['masculino', 'feminino', 'intersexo']),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "sexo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345678901', description: '11 dígitos' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(11, 11),
    (0, class_validator_1.Matches)(/^\d{11}$/, {
        message: 'CPF deve conter exatamente 11 dígitos numéricos',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '12.345.678-9' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "rg", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Maria da Silva' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "nome_mae", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'São Paulo - SP' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "naturalidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: contato_dto_1.CreateContatoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contato_dto_1.CreateContatoDto),
    __metadata("design:type", contato_dto_1.CreateContatoDto)
], CreatePacienteDto.prototype, "contato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: endereco_dto_1.CreateEnderecoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => endereco_dto_1.CreateEnderecoDto),
    __metadata("design:type", endereco_dto_1.CreateEnderecoDto)
], CreatePacienteDto.prototype, "endereco", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [ConvenioPacienteDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ConvenioPacienteDto),
    __metadata("design:type", Array)
], CreatePacienteDto.prototype, "convenios", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePacienteDto.prototype, "ativo", void 0);
//# sourceMappingURL=create-paciente.dto.js.map