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
exports.FilaEsperaSchema = exports.FilaEspera = exports.STATUS_FILA = exports.PRIORIDADE_FILA = exports.TriagemFilaEsperaSchema = exports.TriagemFilaEspera = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const data_info_schema_1 = require("../../../common/schemas/data-info.schema");
let TriagemFilaEspera = class TriagemFilaEspera {
    queixa_rapida;
    pressao_arterial_sistolica;
    pressao_arterial_diastolica;
    temperatura;
    peso;
    altura;
};
exports.TriagemFilaEspera = TriagemFilaEspera;
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], TriagemFilaEspera.prototype, "queixa_rapida", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], TriagemFilaEspera.prototype, "pressao_arterial_sistolica", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], TriagemFilaEspera.prototype, "pressao_arterial_diastolica", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], TriagemFilaEspera.prototype, "temperatura", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], TriagemFilaEspera.prototype, "peso", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], TriagemFilaEspera.prototype, "altura", void 0);
exports.TriagemFilaEspera = TriagemFilaEspera = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], TriagemFilaEspera);
exports.TriagemFilaEsperaSchema = mongoose_1.SchemaFactory.createForClass(TriagemFilaEspera);
exports.PRIORIDADE_FILA = ['normal', 'prioritario', 'urgente'];
exports.STATUS_FILA = [
    'aguardando',
    'em_atendimento',
    'atendido',
    'desistiu',
];
let FilaEspera = class FilaEspera {
    paciente_id;
    agendamento_id;
    profissional_id;
    local_atendimento_id;
    horario_checkin;
    horario_inicio_atendimento;
    horario_fim_atendimento;
    prioridade;
    status;
    posicao_fila;
    triagem;
    nome_paciente;
    nome_profissional;
};
exports.FilaEspera = FilaEspera;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Paciente', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], FilaEspera.prototype, "paciente_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Agendamento' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], FilaEspera.prototype, "agendamento_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Profissional', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], FilaEspera.prototype, "profissional_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'LocalAtendimento', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], FilaEspera.prototype, "local_atendimento_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], FilaEspera.prototype, "horario_checkin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], FilaEspera.prototype, "horario_inicio_atendimento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], FilaEspera.prototype, "horario_fim_atendimento", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: exports.PRIORIDADE_FILA,
        default: 'normal',
    }),
    __metadata("design:type", String)
], FilaEspera.prototype, "prioridade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: exports.STATUS_FILA }),
    __metadata("design:type", String)
], FilaEspera.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], FilaEspera.prototype, "posicao_fila", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.TriagemFilaEsperaSchema }),
    __metadata("design:type", TriagemFilaEspera)
], FilaEspera.prototype, "triagem", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], FilaEspera.prototype, "nome_paciente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], FilaEspera.prototype, "nome_profissional", void 0);
exports.FilaEspera = FilaEspera = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'fila_espera' })
], FilaEspera);
exports.FilaEsperaSchema = mongoose_1.SchemaFactory.createForClass(FilaEspera);
exports.FilaEsperaSchema.index({
    profissional_id: 1,
    local_atendimento_id: 1,
    status: 1,
    posicao_fila: 1,
});
exports.FilaEsperaSchema.index({
    'horario_checkin.data_completa': 1,
    status: 1,
});
exports.FilaEsperaSchema.index({ 'horario_checkin.data_completa': 1 }, { expireAfterSeconds: 172800 });
//# sourceMappingURL=fila-espera.schema.js.map