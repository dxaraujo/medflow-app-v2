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
exports.CreateFilaEsperaDto = exports.TriagemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const data_info_dto_1 = require("../../../common/dto/data-info.dto");
class TriagemDto {
    queixa_rapida;
    pressao_arterial_sistolica;
    pressao_arterial_diastolica;
    temperatura;
    peso;
    altura;
}
exports.TriagemDto = TriagemDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Dor de cabeça forte' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TriagemDto.prototype, "queixa_rapida", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 120 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TriagemDto.prototype, "pressao_arterial_sistolica", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 80 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TriagemDto.prototype, "pressao_arterial_diastolica", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 36.5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TriagemDto.prototype, "temperatura", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 75 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TriagemDto.prototype, "peso", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 170 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TriagemDto.prototype, "altura", void 0);
class CreateFilaEsperaDto {
    paciente_id;
    agendamento_id;
    profissional_id;
    local_id;
    horario_checkin;
    prioridade;
    status;
    posicao_fila;
    triagem;
    nome_paciente;
    nome_profissional;
}
exports.CreateFilaEsperaDto = CreateFilaEsperaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do paciente' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFilaEsperaDto.prototype, "paciente_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID do agendamento' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFilaEsperaDto.prototype, "agendamento_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do profissional' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFilaEsperaDto.prototype, "profissional_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do local de atendimento' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFilaEsperaDto.prototype, "local_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], CreateFilaEsperaDto.prototype, "horario_checkin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['normal', 'prioritario', 'urgente'],
        default: 'normal',
    }),
    (0, class_validator_1.IsEnum)(['normal', 'prioritario', 'urgente']),
    __metadata("design:type", String)
], CreateFilaEsperaDto.prototype, "prioridade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['aguardando', 'em_atendimento', 'atendido', 'desistiu'],
        default: 'aguardando',
    }),
    (0, class_validator_1.IsEnum)(['aguardando', 'em_atendimento', 'atendido', 'desistiu']),
    __metadata("design:type", String)
], CreateFilaEsperaDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFilaEsperaDto.prototype, "posicao_fila", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: TriagemDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TriagemDto),
    __metadata("design:type", TriagemDto)
], CreateFilaEsperaDto.prototype, "triagem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'João da Silva' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFilaEsperaDto.prototype, "nome_paciente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dr. Carlos Souza' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFilaEsperaDto.prototype, "nome_profissional", void 0);
//# sourceMappingURL=create-fila-espera.dto.js.map