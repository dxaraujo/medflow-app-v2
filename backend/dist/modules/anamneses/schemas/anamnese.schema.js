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
exports.AnamneseSchema = exports.Anamnese = exports.CampoEspecialidadeAnamneseSchema = exports.CampoEspecialidadeAnamnese = exports.HistoricoAtualizacaoAnamneseSchema = exports.HistoricoAtualizacaoAnamnese = exports.HistoriaDoencaAtualAnamneseSchema = exports.HistoriaDoencaAtualAnamnese = exports.AntecedentesPessoaisAnamneseSchema = exports.AntecedentesPessoaisAnamnese = exports.HabitosVidaAnamneseSchema = exports.HabitosVidaAnamnese = exports.SonoAnamneseSchema = exports.SonoAnamnese = exports.AtividadeFisicaAnamneseSchema = exports.AtividadeFisicaAnamnese = exports.EtilismoAnamneseSchema = exports.EtilismoAnamnese = exports.TabagismoAnamneseSchema = exports.TabagismoAnamnese = exports.AlergiaAnamneseSchema = exports.AlergiaAnamnese = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const data_info_schema_1 = require("../../../common/schemas/data-info.schema");
let AlergiaAnamnese = class AlergiaAnamnese {
    tipo;
    substancia;
    gravidade;
    reacao;
};
exports.AlergiaAnamnese = AlergiaAnamnese;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['medicamento', 'alimento', 'outro'],
    }),
    __metadata("design:type", String)
], AlergiaAnamnese.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AlergiaAnamnese.prototype, "substancia", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['leve', 'moderada', 'grave'],
    }),
    __metadata("design:type", String)
], AlergiaAnamnese.prototype, "gravidade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AlergiaAnamnese.prototype, "reacao", void 0);
exports.AlergiaAnamnese = AlergiaAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], AlergiaAnamnese);
exports.AlergiaAnamneseSchema = mongoose_1.SchemaFactory.createForClass(AlergiaAnamnese);
let TabagismoAnamnese = class TabagismoAnamnese {
    status;
    quantidade_por_dia;
    tempo_anos;
};
exports.TabagismoAnamnese = TabagismoAnamnese;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['nunca', 'ex', 'atual'],
    }),
    __metadata("design:type", String)
], TabagismoAnamnese.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], TabagismoAnamnese.prototype, "quantidade_por_dia", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], TabagismoAnamnese.prototype, "tempo_anos", void 0);
exports.TabagismoAnamnese = TabagismoAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], TabagismoAnamnese);
exports.TabagismoAnamneseSchema = mongoose_1.SchemaFactory.createForClass(TabagismoAnamnese);
let EtilismoAnamnese = class EtilismoAnamnese {
    status;
    frequencia;
    tipo;
};
exports.EtilismoAnamnese = EtilismoAnamnese;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['nunca', 'social', 'regular', 'ex'],
    }),
    __metadata("design:type", String)
], EtilismoAnamnese.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], EtilismoAnamnese.prototype, "frequencia", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], EtilismoAnamnese.prototype, "tipo", void 0);
exports.EtilismoAnamnese = EtilismoAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], EtilismoAnamnese);
exports.EtilismoAnamneseSchema = mongoose_1.SchemaFactory.createForClass(EtilismoAnamnese);
let AtividadeFisicaAnamnese = class AtividadeFisicaAnamnese {
    pratica;
    tipo;
    frequencia_semanal;
};
exports.AtividadeFisicaAnamnese = AtividadeFisicaAnamnese;
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true }),
    __metadata("design:type", Boolean)
], AtividadeFisicaAnamnese.prototype, "pratica", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AtividadeFisicaAnamnese.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AtividadeFisicaAnamnese.prototype, "frequencia_semanal", void 0);
exports.AtividadeFisicaAnamnese = AtividadeFisicaAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], AtividadeFisicaAnamnese);
exports.AtividadeFisicaAnamneseSchema = mongoose_1.SchemaFactory.createForClass(AtividadeFisicaAnamnese);
let SonoAnamnese = class SonoAnamnese {
    qualidade;
    horas_por_noite;
};
exports.SonoAnamnese = SonoAnamnese;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['boa', 'regular', 'ruim'],
    }),
    __metadata("design:type", String)
], SonoAnamnese.prototype, "qualidade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SonoAnamnese.prototype, "horas_por_noite", void 0);
exports.SonoAnamnese = SonoAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SonoAnamnese);
exports.SonoAnamneseSchema = mongoose_1.SchemaFactory.createForClass(SonoAnamnese);
let HabitosVidaAnamnese = class HabitosVidaAnamnese {
    tabagismo;
    etilismo;
    atividade_fisica;
    alimentacao;
    sono;
};
exports.HabitosVidaAnamnese = HabitosVidaAnamnese;
__decorate([
    (0, mongoose_1.Prop)({ type: exports.TabagismoAnamneseSchema, required: true }),
    __metadata("design:type", TabagismoAnamnese)
], HabitosVidaAnamnese.prototype, "tabagismo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.EtilismoAnamneseSchema, required: true }),
    __metadata("design:type", EtilismoAnamnese)
], HabitosVidaAnamnese.prototype, "etilismo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.AtividadeFisicaAnamneseSchema, required: true }),
    __metadata("design:type", AtividadeFisicaAnamnese)
], HabitosVidaAnamnese.prototype, "atividade_fisica", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], HabitosVidaAnamnese.prototype, "alimentacao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SonoAnamneseSchema, required: true }),
    __metadata("design:type", SonoAnamnese)
], HabitosVidaAnamnese.prototype, "sono", void 0);
exports.HabitosVidaAnamnese = HabitosVidaAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], HabitosVidaAnamnese);
exports.HabitosVidaAnamneseSchema = mongoose_1.SchemaFactory.createForClass(HabitosVidaAnamnese);
let AntecedentesPessoaisAnamnese = class AntecedentesPessoaisAnamnese {
    doencas_previas;
    cirurgias;
    alergias;
    medicamentos_uso_continuo;
    internacoes;
};
exports.AntecedentesPessoaisAnamnese = AntecedentesPessoaisAnamnese;
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamnese.prototype, "doencas_previas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamnese.prototype, "cirurgias", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.AlergiaAnamneseSchema], default: [] }),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamnese.prototype, "alergias", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamnese.prototype, "medicamentos_uso_continuo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamnese.prototype, "internacoes", void 0);
exports.AntecedentesPessoaisAnamnese = AntecedentesPessoaisAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], AntecedentesPessoaisAnamnese);
exports.AntecedentesPessoaisAnamneseSchema = mongoose_1.SchemaFactory.createForClass(AntecedentesPessoaisAnamnese);
let HistoriaDoencaAtualAnamnese = class HistoriaDoencaAtualAnamnese {
    descricao;
    data_inicio_sintomas;
    localizacao;
    intensidade;
    fatores_melhora;
    fatores_piora;
};
exports.HistoriaDoencaAtualAnamnese = HistoriaDoencaAtualAnamnese;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], HistoriaDoencaAtualAnamnese.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], HistoriaDoencaAtualAnamnese.prototype, "data_inicio_sintomas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], HistoriaDoencaAtualAnamnese.prototype, "localizacao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, min: 0, max: 10 }),
    __metadata("design:type", Number)
], HistoriaDoencaAtualAnamnese.prototype, "intensidade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], HistoriaDoencaAtualAnamnese.prototype, "fatores_melhora", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], HistoriaDoencaAtualAnamnese.prototype, "fatores_piora", void 0);
exports.HistoriaDoencaAtualAnamnese = HistoriaDoencaAtualAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], HistoriaDoencaAtualAnamnese);
exports.HistoriaDoencaAtualAnamneseSchema = mongoose_1.SchemaFactory.createForClass(HistoriaDoencaAtualAnamnese);
let HistoricoAtualizacaoAnamnese = class HistoricoAtualizacaoAnamnese {
    data_alteracao;
    profissional_id;
    campo_alterado;
    valor_anterior;
    valor_novo;
    motivo;
};
exports.HistoricoAtualizacaoAnamnese = HistoricoAtualizacaoAnamnese;
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], HistoricoAtualizacaoAnamnese.prototype, "data_alteracao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Profissional', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HistoricoAtualizacaoAnamnese.prototype, "profissional_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], HistoricoAtualizacaoAnamnese.prototype, "campo_alterado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed }),
    __metadata("design:type", Object)
], HistoricoAtualizacaoAnamnese.prototype, "valor_anterior", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed }),
    __metadata("design:type", Object)
], HistoricoAtualizacaoAnamnese.prototype, "valor_novo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], HistoricoAtualizacaoAnamnese.prototype, "motivo", void 0);
exports.HistoricoAtualizacaoAnamnese = HistoricoAtualizacaoAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], HistoricoAtualizacaoAnamnese);
exports.HistoricoAtualizacaoAnamneseSchema = mongoose_1.SchemaFactory.createForClass(HistoricoAtualizacaoAnamnese);
let CampoEspecialidadeAnamnese = class CampoEspecialidadeAnamnese {
    chave;
    valor;
};
exports.CampoEspecialidadeAnamnese = CampoEspecialidadeAnamnese;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], CampoEspecialidadeAnamnese.prototype, "chave", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed }),
    __metadata("design:type", Object)
], CampoEspecialidadeAnamnese.prototype, "valor", void 0);
exports.CampoEspecialidadeAnamnese = CampoEspecialidadeAnamnese = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], CampoEspecialidadeAnamnese);
exports.CampoEspecialidadeAnamneseSchema = mongoose_1.SchemaFactory.createForClass(CampoEspecialidadeAnamnese);
let Anamnese = class Anamnese {
    paciente_id;
    profissional_criacao_id;
    data_criacao;
    queixa_principal;
    historia_doenca_atual;
    antecedentes_pessoais;
    antecedentes_familiares;
    habitos_vida;
    campos_especialidade;
    cids;
    historico_atualizacoes;
};
exports.Anamnese = Anamnese;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Paciente', required: true, unique: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Anamnese.prototype, "paciente_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'Profissional',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Anamnese.prototype, "profissional_criacao_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], Anamnese.prototype, "data_criacao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Anamnese.prototype, "queixa_principal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.HistoriaDoencaAtualAnamneseSchema, required: true }),
    __metadata("design:type", HistoriaDoencaAtualAnamnese)
], Anamnese.prototype, "historia_doenca_atual", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.AntecedentesPessoaisAnamneseSchema, required: true }),
    __metadata("design:type", AntecedentesPessoaisAnamnese)
], Anamnese.prototype, "antecedentes_pessoais", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Anamnese.prototype, "antecedentes_familiares", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.HabitosVidaAnamneseSchema, required: true }),
    __metadata("design:type", HabitosVidaAnamnese)
], Anamnese.prototype, "habitos_vida", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.CampoEspecialidadeAnamneseSchema], default: [] }),
    __metadata("design:type", Array)
], Anamnese.prototype, "campos_especialidade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Anamnese.prototype, "cids", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.HistoricoAtualizacaoAnamneseSchema], default: [] }),
    __metadata("design:type", Array)
], Anamnese.prototype, "historico_atualizacoes", void 0);
exports.Anamnese = Anamnese = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'anamneses' })
], Anamnese);
exports.AnamneseSchema = mongoose_1.SchemaFactory.createForClass(Anamnese);
exports.AnamneseSchema.index({ cids: 1 });
exports.AnamneseSchema.index({ 'antecedentes_pessoais.alergias.substancia': 1 });
exports.AnamneseSchema.index({
    queixa_principal: 'text',
    'historia_doenca_atual.descricao': 'text',
});
//# sourceMappingURL=anamnese.schema.js.map