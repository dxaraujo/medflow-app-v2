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
exports.CreateAgendamentoDto = exports.TelemedicinaAgendamentoDto = exports.BloqueioAgendamentoDto = exports.RecorrenciaBloqueioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const data_info_dto_1 = require("../../../common/dto/data-info.dto");
class RecorrenciaBloqueioDto {
    dias_semana;
    hora_inicio;
    hora_fim;
}
exports.RecorrenciaBloqueioDto = RecorrenciaBloqueioDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: [1, 2, 3, 4, 5] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], RecorrenciaBloqueioDto.prototype, "dias_semana", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '12:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecorrenciaBloqueioDto.prototype, "hora_inicio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '13:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecorrenciaBloqueioDto.prototype, "hora_fim", void 0);
class BloqueioAgendamentoDto {
    motivo;
    categoria;
    recorrente;
    recorrencia;
}
exports.BloqueioAgendamentoDto = BloqueioAgendamentoDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Férias de julho' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BloqueioAgendamentoDto.prototype, "motivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['ferias', 'intervalo', 'indisponibilidade', 'outro'] }),
    (0, class_validator_1.IsEnum)(['ferias', 'intervalo', 'indisponibilidade', 'outro']),
    __metadata("design:type", String)
], BloqueioAgendamentoDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], BloqueioAgendamentoDto.prototype, "recorrente", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: RecorrenciaBloqueioDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RecorrenciaBloqueioDto),
    __metadata("design:type", RecorrenciaBloqueioDto)
], BloqueioAgendamentoDto.prototype, "recorrencia", void 0);
class TelemedicinaAgendamentoDto {
    link_sala_virtual;
    plataforma;
}
exports.TelemedicinaAgendamentoDto = TelemedicinaAgendamentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://meet.example.com/sala123' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TelemedicinaAgendamentoDto.prototype, "link_sala_virtual", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Google Meet' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TelemedicinaAgendamentoDto.prototype, "plataforma", void 0);
const TIPOS = [
    'primeira_consulta',
    'consulta',
    'retorno',
    'encaixe',
    'telemedicina',
    'bloqueio',
];
const STATUS_LIST = [
    'agendado',
    'confirmado',
    'em_espera',
    'em_atendimento',
    'finalizado',
    'cancelado',
    'faltou',
    'bloqueado',
];
class CreateAgendamentoDto {
    profissional_id;
    local_id;
    tipo;
    paciente_id;
    data_horario_inicio;
    data_horario_fim;
    duracao_minutos;
    duracao_personalizada;
    duracao_padrao_tipo_minutos;
    bloqueio;
    telemedicina;
    status;
    is_encaixe;
    observacoes;
    nome_paciente;
    nome_profissional;
    telefone_paciente;
    convenio_nome;
}
exports.CreateAgendamentoDto = CreateAgendamentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do profissional' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "profissional_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do local de atendimento' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "local_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: TIPOS }),
    (0, class_validator_1.IsEnum)(TIPOS),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID do paciente (obrigatório exceto para bloqueio)',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.tipo !== 'bloqueio'),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "paciente_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], CreateAgendamentoDto.prototype, "data_horario_inicio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], CreateAgendamentoDto.prototype, "data_horario_fim", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, description: 'Múltiplo de 5, entre 5 e 120' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(5),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], CreateAgendamentoDto.prototype, "duracao_minutos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAgendamentoDto.prototype, "duracao_personalizada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(5),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], CreateAgendamentoDto.prototype, "duracao_padrao_tipo_minutos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: BloqueioAgendamentoDto }),
    (0, class_validator_1.ValidateIf)((o) => o.tipo === 'bloqueio'),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => BloqueioAgendamentoDto),
    __metadata("design:type", BloqueioAgendamentoDto)
], CreateAgendamentoDto.prototype, "bloqueio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: TelemedicinaAgendamentoDto }),
    (0, class_validator_1.ValidateIf)((o) => o.tipo === 'telemedicina'),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TelemedicinaAgendamentoDto),
    __metadata("design:type", TelemedicinaAgendamentoDto)
], CreateAgendamentoDto.prototype, "telemedicina", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: STATUS_LIST, default: 'agendado' }),
    (0, class_validator_1.IsEnum)(STATUS_LIST),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAgendamentoDto.prototype, "is_encaixe", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "observacoes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "nome_paciente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dr. Carlos Souza' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "nome_profissional", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "telefone_paciente", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgendamentoDto.prototype, "convenio_nome", void 0);
//# sourceMappingURL=create-agendamento.dto.js.map