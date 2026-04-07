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
exports.CreateLocalAtendimentoDto = exports.ConfiguracaoProfissionalDto = exports.DuracoesPorTipoDto = exports.HorarioFuncionamentoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const endereco_dto_1 = require("../../../common/dto/endereco.dto");
function IsDuracaoAgendaMinutos(validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        name: 'isDuracaoAgendaMinutos',
        validator: {
            validate: (value) => typeof value === 'number' &&
                Number.isInteger(value) &&
                value >= 5 &&
                value <= 120 &&
                value % 5 === 0,
            defaultMessage: () => 'deve ser um inteiro entre 5 e 120, múltiplo de 5',
        },
    }, validationOptions);
}
class HorarioFuncionamentoDto {
    dia_semana;
    hora_inicio;
    hora_fim;
}
exports.HorarioFuncionamentoDto = HorarioFuncionamentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dia da semana (0 = domingo … 6 = sábado)' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(6),
    __metadata("design:type", Number)
], HorarioFuncionamentoDto.prototype, "dia_semana", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '08:00' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HorarioFuncionamentoDto.prototype, "hora_inicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '18:00' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HorarioFuncionamentoDto.prototype, "hora_fim", void 0);
class DuracoesPorTipoDto {
    primeira_consulta;
    consulta;
    retorno;
    encaixe;
    telemedicina;
}
exports.DuracoesPorTipoDto = DuracoesPorTipoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 60, minimum: 5, maximum: 120 }),
    (0, class_validator_1.IsInt)(),
    IsDuracaoAgendaMinutos(),
    __metadata("design:type", Number)
], DuracoesPorTipoDto.prototype, "primeira_consulta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, minimum: 5, maximum: 120 }),
    (0, class_validator_1.IsInt)(),
    IsDuracaoAgendaMinutos(),
    __metadata("design:type", Number)
], DuracoesPorTipoDto.prototype, "consulta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20, minimum: 5, maximum: 120 }),
    (0, class_validator_1.IsInt)(),
    IsDuracaoAgendaMinutos(),
    __metadata("design:type", Number)
], DuracoesPorTipoDto.prototype, "retorno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 15, minimum: 5, maximum: 120 }),
    (0, class_validator_1.IsInt)(),
    IsDuracaoAgendaMinutos(),
    __metadata("design:type", Number)
], DuracoesPorTipoDto.prototype, "encaixe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, minimum: 5, maximum: 120 }),
    (0, class_validator_1.IsInt)(),
    IsDuracaoAgendaMinutos(),
    __metadata("design:type", Number)
], DuracoesPorTipoDto.prototype, "telemedicina", void 0);
class ConfiguracaoProfissionalDto {
    profissional_id;
    horarios_funcionamento;
    duracoes_por_tipo;
}
exports.ConfiguracaoProfissionalDto = ConfiguracaoProfissionalDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do profissional' }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], ConfiguracaoProfissionalDto.prototype, "profissional_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [HorarioFuncionamentoDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => HorarioFuncionamentoDto),
    __metadata("design:type", Array)
], ConfiguracaoProfissionalDto.prototype, "horarios_funcionamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DuracoesPorTipoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DuracoesPorTipoDto),
    __metadata("design:type", DuracoesPorTipoDto)
], ConfiguracaoProfissionalDto.prototype, "duracoes_por_tipo", void 0);
class CreateLocalAtendimentoDto {
    nome;
    endereco;
    telefone;
    cnes;
    ativo;
    configuracoes_profissionais;
}
exports.CreateLocalAtendimentoDto = CreateLocalAtendimentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clínica Saúde Total' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLocalAtendimentoDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: endereco_dto_1.CreateEnderecoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => endereco_dto_1.CreateEnderecoDto),
    __metadata("design:type", endereco_dto_1.CreateEnderecoDto)
], CreateLocalAtendimentoDto.prototype, "endereco", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '(11) 98765-4321' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLocalAtendimentoDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '1234567' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLocalAtendimentoDto.prototype, "cnes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateLocalAtendimentoDto.prototype, "ativo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [ConfiguracaoProfissionalDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ConfiguracaoProfissionalDto),
    __metadata("design:type", Array)
], CreateLocalAtendimentoDto.prototype, "configuracoes_profissionais", void 0);
//# sourceMappingURL=create-local-atendimento.dto.js.map