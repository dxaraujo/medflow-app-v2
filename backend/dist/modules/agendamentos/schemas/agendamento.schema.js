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
exports.AgendamentoSchema = exports.Agendamento = exports.STATUS_AGENDAMENTO = exports.TIPO_AGENDAMENTO = exports.TelemedicinaAgendamentoSchema = exports.TelemedicinaAgendamento = exports.BloqueioAgendamentoSchema = exports.BloqueioAgendamento = exports.RecorrenciaBloqueioSchema = exports.RecorrenciaBloqueio = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const data_info_schema_1 = require("../../../common/schemas/data-info.schema");
let RecorrenciaBloqueio = class RecorrenciaBloqueio {
    dias_semana;
    hora_inicio;
    hora_fim;
};
exports.RecorrenciaBloqueio = RecorrenciaBloqueio;
__decorate([
    (0, mongoose_1.Prop)({ type: [Number] }),
    __metadata("design:type", Array)
], RecorrenciaBloqueio.prototype, "dias_semana", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], RecorrenciaBloqueio.prototype, "hora_inicio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], RecorrenciaBloqueio.prototype, "hora_fim", void 0);
exports.RecorrenciaBloqueio = RecorrenciaBloqueio = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], RecorrenciaBloqueio);
exports.RecorrenciaBloqueioSchema = mongoose_1.SchemaFactory.createForClass(RecorrenciaBloqueio);
let BloqueioAgendamento = class BloqueioAgendamento {
    motivo;
    categoria;
    recorrente;
    recorrencia;
};
exports.BloqueioAgendamento = BloqueioAgendamento;
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], BloqueioAgendamento.prototype, "motivo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['ferias', 'intervalo', 'indisponibilidade', 'outro'],
    }),
    __metadata("design:type", String)
], BloqueioAgendamento.prototype, "categoria", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], BloqueioAgendamento.prototype, "recorrente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.RecorrenciaBloqueioSchema }),
    __metadata("design:type", RecorrenciaBloqueio)
], BloqueioAgendamento.prototype, "recorrencia", void 0);
exports.BloqueioAgendamento = BloqueioAgendamento = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], BloqueioAgendamento);
exports.BloqueioAgendamentoSchema = mongoose_1.SchemaFactory.createForClass(BloqueioAgendamento);
let TelemedicinaAgendamento = class TelemedicinaAgendamento {
    link_sala_virtual;
    plataforma;
};
exports.TelemedicinaAgendamento = TelemedicinaAgendamento;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], TelemedicinaAgendamento.prototype, "link_sala_virtual", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], TelemedicinaAgendamento.prototype, "plataforma", void 0);
exports.TelemedicinaAgendamento = TelemedicinaAgendamento = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], TelemedicinaAgendamento);
exports.TelemedicinaAgendamentoSchema = mongoose_1.SchemaFactory.createForClass(TelemedicinaAgendamento);
exports.TIPO_AGENDAMENTO = [
    'primeira_consulta',
    'consulta',
    'retorno',
    'encaixe',
    'telemedicina',
    'bloqueio',
];
exports.STATUS_AGENDAMENTO = [
    'agendado',
    'confirmado',
    'em_espera',
    'em_atendimento',
    'finalizado',
    'cancelado',
    'faltou',
    'bloqueado',
];
let Agendamento = class Agendamento {
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
};
exports.Agendamento = Agendamento;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Profissional', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Agendamento.prototype, "profissional_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'LocalAtendimento', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Agendamento.prototype, "local_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: exports.TIPO_AGENDAMENTO }),
    __metadata("design:type", String)
], Agendamento.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Paciente' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Agendamento.prototype, "paciente_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], Agendamento.prototype, "data_horario_inicio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], Agendamento.prototype, "data_horario_fim", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Agendamento.prototype, "duracao_minutos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], Agendamento.prototype, "duracao_personalizada", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Agendamento.prototype, "duracao_padrao_tipo_minutos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.BloqueioAgendamentoSchema }),
    __metadata("design:type", BloqueioAgendamento)
], Agendamento.prototype, "bloqueio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.TelemedicinaAgendamentoSchema }),
    __metadata("design:type", TelemedicinaAgendamento)
], Agendamento.prototype, "telemedicina", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: exports.STATUS_AGENDAMENTO }),
    __metadata("design:type", String)
], Agendamento.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], Agendamento.prototype, "is_encaixe", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Agendamento.prototype, "observacoes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Agendamento.prototype, "nome_paciente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Agendamento.prototype, "nome_profissional", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Agendamento.prototype, "telefone_paciente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Agendamento.prototype, "convenio_nome", void 0);
exports.Agendamento = Agendamento = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'agendamentos' })
], Agendamento);
exports.AgendamentoSchema = mongoose_1.SchemaFactory.createForClass(Agendamento);
exports.AgendamentoSchema.index({
    profissional_id: 1,
    local_id: 1,
    'data_horario_inicio.data_completa': 1,
});
exports.AgendamentoSchema.index({
    profissional_id: 1,
    'data_horario_inicio.ano': 1,
    'data_horario_inicio.mes': 1,
});
exports.AgendamentoSchema.index({
    tipo: 1,
    'data_horario_inicio.ano': 1,
    'data_horario_inicio.mes': 1,
});
exports.AgendamentoSchema.index({ paciente_id: 1 }, { sparse: true });
exports.AgendamentoSchema.index({
    status: 1,
    'data_horario_inicio.ano': 1,
    'data_horario_inicio.mes': 1,
});
exports.AgendamentoSchema.index({
    is_encaixe: 1,
    profissional_id: 1,
    'data_horario_inicio.data_completa': 1,
});
exports.AgendamentoSchema.index({
    profissional_id: 1,
    tipo: 1,
    'data_horario_inicio.data_completa': 1,
    'data_horario_fim.data_completa': 1,
});
//# sourceMappingURL=agendamento.schema.js.map