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
exports.AtendimentoSchema = exports.Atendimento = exports.DocumentoAnexadoSchema = exports.DocumentoAnexado = exports.TIPOS_DOCUMENTO_ANEXO = exports.AtestadoAtendimentoSchema = exports.AtestadoAtendimento = exports.PedidoExameSchema = exports.PedidoExame = exports.PrescricoesAtendimentoSchema = exports.PrescricoesAtendimento = exports.ItemPrescricaoSchema = exports.ItemPrescricao = exports.VIAS_ADMINISTRACAO = exports.ProcedimentoAtendimentoSchema = exports.ProcedimentoAtendimento = exports.CondutaSchema = exports.Conduta = exports.HipoteseDiagnosticaSchema = exports.HipoteseDiagnostica = exports.ExameFisicoSchema = exports.ExameFisico = exports.SegmentarExameFisicoSchema = exports.SegmentarExameFisico = exports.SegmentoExameFisicoSchema = exports.SegmentoExameFisico = exports.SinaisVitaisSchema = exports.SinaisVitais = exports.STATUS_ATENDIMENTO = exports.TIPOS_ATENDIMENTO = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const data_info_schema_1 = require("../../../common/schemas/data-info.schema");
exports.TIPOS_ATENDIMENTO = [
    'primeira_consulta',
    'consulta',
    'retorno',
    'encaixe',
    'telemedicina',
];
exports.STATUS_ATENDIMENTO = [
    'em_andamento',
    'finalizado',
    'cancelado',
];
let SinaisVitais = class SinaisVitais {
    pressao_arterial_sistolica;
    pressao_arterial_diastolica;
    frequencia_cardiaca;
    frequencia_respiratoria;
    temperatura;
    saturacao_o2;
    peso;
    altura;
    imc;
    glicemia_capilar;
    observacoes_vitais;
};
exports.SinaisVitais = SinaisVitais;
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "pressao_arterial_sistolica", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "pressao_arterial_diastolica", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "frequencia_cardiaca", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "frequencia_respiratoria", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "temperatura", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "saturacao_o2", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "peso", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "altura", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "imc", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], SinaisVitais.prototype, "glicemia_capilar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], SinaisVitais.prototype, "observacoes_vitais", void 0);
exports.SinaisVitais = SinaisVitais = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SinaisVitais);
exports.SinaisVitaisSchema = mongoose_1.SchemaFactory.createForClass(SinaisVitais);
let SegmentoExameFisico = class SegmentoExameFisico {
    normal;
    descricao;
};
exports.SegmentoExameFisico = SegmentoExameFisico;
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true }),
    __metadata("design:type", Boolean)
], SegmentoExameFisico.prototype, "normal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], SegmentoExameFisico.prototype, "descricao", void 0);
exports.SegmentoExameFisico = SegmentoExameFisico = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SegmentoExameFisico);
exports.SegmentoExameFisicoSchema = mongoose_1.SchemaFactory.createForClass(SegmentoExameFisico);
let SegmentarExameFisico = class SegmentarExameFisico {
    cabeca_pescoco;
    torax_pulmoes;
    cardiovascular;
    abdomen;
    extremidades;
    neurologico;
    pele;
};
exports.SegmentarExameFisico = SegmentarExameFisico;
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SegmentoExameFisicoSchema }),
    __metadata("design:type", SegmentoExameFisico)
], SegmentarExameFisico.prototype, "cabeca_pescoco", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SegmentoExameFisicoSchema }),
    __metadata("design:type", SegmentoExameFisico)
], SegmentarExameFisico.prototype, "torax_pulmoes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SegmentoExameFisicoSchema }),
    __metadata("design:type", SegmentoExameFisico)
], SegmentarExameFisico.prototype, "cardiovascular", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SegmentoExameFisicoSchema }),
    __metadata("design:type", SegmentoExameFisico)
], SegmentarExameFisico.prototype, "abdomen", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SegmentoExameFisicoSchema }),
    __metadata("design:type", SegmentoExameFisico)
], SegmentarExameFisico.prototype, "extremidades", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SegmentoExameFisicoSchema }),
    __metadata("design:type", SegmentoExameFisico)
], SegmentarExameFisico.prototype, "neurologico", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SegmentoExameFisicoSchema }),
    __metadata("design:type", SegmentoExameFisico)
], SegmentarExameFisico.prototype, "pele", void 0);
exports.SegmentarExameFisico = SegmentarExameFisico = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SegmentarExameFisico);
exports.SegmentarExameFisicoSchema = mongoose_1.SchemaFactory.createForClass(SegmentarExameFisico);
let ExameFisico = class ExameFisico {
    estado_geral;
    segmentar;
    exame_fisico_complementar;
};
exports.ExameFisico = ExameFisico;
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ExameFisico.prototype, "estado_geral", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SegmentarExameFisicoSchema }),
    __metadata("design:type", SegmentarExameFisico)
], ExameFisico.prototype, "segmentar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ExameFisico.prototype, "exame_fisico_complementar", void 0);
exports.ExameFisico = ExameFisico = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ExameFisico);
exports.ExameFisicoSchema = mongoose_1.SchemaFactory.createForClass(ExameFisico);
let HipoteseDiagnostica = class HipoteseDiagnostica {
    descricao;
    cid_codigo;
    cid_descricao;
    tipo;
    status;
};
exports.HipoteseDiagnostica = HipoteseDiagnostica;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], HipoteseDiagnostica.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], HipoteseDiagnostica.prototype, "cid_codigo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], HipoteseDiagnostica.prototype, "cid_descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: ['principal', 'secundaria'] }),
    __metadata("design:type", String)
], HipoteseDiagnostica.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: ['hipotese', 'confirmado'] }),
    __metadata("design:type", String)
], HipoteseDiagnostica.prototype, "status", void 0);
exports.HipoteseDiagnostica = HipoteseDiagnostica = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], HipoteseDiagnostica);
exports.HipoteseDiagnosticaSchema = mongoose_1.SchemaFactory.createForClass(HipoteseDiagnostica);
let Conduta = class Conduta {
    plano_terapeutico;
    orientacoes_paciente;
};
exports.Conduta = Conduta;
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Conduta.prototype, "plano_terapeutico", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Conduta.prototype, "orientacoes_paciente", void 0);
exports.Conduta = Conduta = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Conduta);
exports.CondutaSchema = mongoose_1.SchemaFactory.createForClass(Conduta);
let ProcedimentoAtendimento = class ProcedimentoAtendimento {
    descricao_procedimento;
    codigo_procedimento;
    data;
    observacoes;
};
exports.ProcedimentoAtendimento = ProcedimentoAtendimento;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ProcedimentoAtendimento.prototype, "descricao_procedimento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ProcedimentoAtendimento.prototype, "codigo_procedimento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], ProcedimentoAtendimento.prototype, "data", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ProcedimentoAtendimento.prototype, "observacoes", void 0);
exports.ProcedimentoAtendimento = ProcedimentoAtendimento = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ProcedimentoAtendimento);
exports.ProcedimentoAtendimentoSchema = mongoose_1.SchemaFactory.createForClass(ProcedimentoAtendimento);
exports.VIAS_ADMINISTRACAO = [
    'oral',
    'intravenosa',
    'intramuscular',
    'subcutanea',
    'topica',
    'inalatoria',
    'oftalmica',
    'otologica',
    'nasal',
    'retal',
    'outro',
];
let ItemPrescricao = class ItemPrescricao {
    nome_medicamento;
    principio_ativo;
    dosagem;
    via_administracao;
    frequencia;
    duracao;
    quantidade;
    observacoes;
};
exports.ItemPrescricao = ItemPrescricao;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ItemPrescricao.prototype, "nome_medicamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ItemPrescricao.prototype, "principio_ativo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ItemPrescricao.prototype, "dosagem", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: [...exports.VIAS_ADMINISTRACAO] }),
    __metadata("design:type", String)
], ItemPrescricao.prototype, "via_administracao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ItemPrescricao.prototype, "frequencia", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ItemPrescricao.prototype, "duracao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ItemPrescricao.prototype, "quantidade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ItemPrescricao.prototype, "observacoes", void 0);
exports.ItemPrescricao = ItemPrescricao = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ItemPrescricao);
exports.ItemPrescricaoSchema = mongoose_1.SchemaFactory.createForClass(ItemPrescricao);
let PrescricoesAtendimento = class PrescricoesAtendimento {
    tipo_receita;
    numero_receita;
    itens;
};
exports.PrescricoesAtendimento = PrescricoesAtendimento;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['simples', 'especial', 'controle_especial'],
    }),
    __metadata("design:type", String)
], PrescricoesAtendimento.prototype, "tipo_receita", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PrescricoesAtendimento.prototype, "numero_receita", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.ItemPrescricaoSchema], default: [] }),
    __metadata("design:type", Array)
], PrescricoesAtendimento.prototype, "itens", void 0);
exports.PrescricoesAtendimento = PrescricoesAtendimento = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], PrescricoesAtendimento);
exports.PrescricoesAtendimentoSchema = mongoose_1.SchemaFactory.createForClass(PrescricoesAtendimento);
let PedidoExame = class PedidoExame {
    tipo_exame;
    descricao_exame;
    codigo_exame;
    justificativa_clinica;
    urgencia;
    status;
    data_solicitacao;
    data_resultado;
    resultado_resumo;
    arquivo_resultado_ref;
};
exports.PedidoExame = PedidoExame;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['laboratorial', 'imagem', 'outro'],
    }),
    __metadata("design:type", String)
], PedidoExame.prototype, "tipo_exame", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], PedidoExame.prototype, "descricao_exame", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PedidoExame.prototype, "codigo_exame", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PedidoExame.prototype, "justificativa_clinica", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: ['rotina', 'urgente'] }),
    __metadata("design:type", String)
], PedidoExame.prototype, "urgencia", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['solicitado', 'realizado', 'resultado_disponivel'],
    }),
    __metadata("design:type", String)
], PedidoExame.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], PedidoExame.prototype, "data_solicitacao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], PedidoExame.prototype, "data_resultado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PedidoExame.prototype, "resultado_resumo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PedidoExame.prototype, "arquivo_resultado_ref", void 0);
exports.PedidoExame = PedidoExame = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], PedidoExame);
exports.PedidoExameSchema = mongoose_1.SchemaFactory.createForClass(PedidoExame);
let AtestadoAtendimento = class AtestadoAtendimento {
    tipo;
    descricao;
    cid_codigo;
    dias_afastamento;
    data_emissao;
};
exports.AtestadoAtendimento = AtestadoAtendimento;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['atestado_medico', 'declaracao_comparecimento', 'laudo', 'outro'],
    }),
    __metadata("design:type", String)
], AtestadoAtendimento.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AtestadoAtendimento.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AtestadoAtendimento.prototype, "cid_codigo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], AtestadoAtendimento.prototype, "dias_afastamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], AtestadoAtendimento.prototype, "data_emissao", void 0);
exports.AtestadoAtendimento = AtestadoAtendimento = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], AtestadoAtendimento);
exports.AtestadoAtendimentoSchema = mongoose_1.SchemaFactory.createForClass(AtestadoAtendimento);
exports.TIPOS_DOCUMENTO_ANEXO = [
    'exame',
    'laudo',
    'imagem',
    'receita',
    'atestado',
    'consentimento',
    'outro',
];
let DocumentoAnexado = class DocumentoAnexado {
    tipo_documento;
    descricao;
    nome_arquivo;
    caminho_armazenamento;
    mime_type;
    tamanho_bytes;
    data_upload;
    profissional_upload_id;
};
exports.DocumentoAnexado = DocumentoAnexado;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: [...exports.TIPOS_DOCUMENTO_ANEXO] }),
    __metadata("design:type", String)
], DocumentoAnexado.prototype, "tipo_documento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], DocumentoAnexado.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], DocumentoAnexado.prototype, "nome_arquivo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], DocumentoAnexado.prototype, "caminho_armazenamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], DocumentoAnexado.prototype, "mime_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], DocumentoAnexado.prototype, "tamanho_bytes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], DocumentoAnexado.prototype, "data_upload", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Profissional', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], DocumentoAnexado.prototype, "profissional_upload_id", void 0);
exports.DocumentoAnexado = DocumentoAnexado = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], DocumentoAnexado);
exports.DocumentoAnexadoSchema = mongoose_1.SchemaFactory.createForClass(DocumentoAnexado);
let Atendimento = class Atendimento {
    paciente_id;
    profissional_id;
    local_atendimento_id;
    agendamento_id;
    data_atendimento;
    tipo_atendimento;
    status;
    nome_paciente;
    nome_profissional;
    sinais_vitais;
    exame_fisico;
    hipoteses_diagnosticas;
    conduta;
    procedimentos;
    prescricoes;
    pedidos_exames;
    atestados;
    documentos_anexados;
};
exports.Atendimento = Atendimento;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Paciente', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Atendimento.prototype, "paciente_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Profissional', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Atendimento.prototype, "profissional_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'LocalAtendimento', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Atendimento.prototype, "local_atendimento_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Agendamento' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Atendimento.prototype, "agendamento_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], Atendimento.prototype, "data_atendimento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: [...exports.TIPOS_ATENDIMENTO] }),
    __metadata("design:type", String)
], Atendimento.prototype, "tipo_atendimento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: [...exports.STATUS_ATENDIMENTO] }),
    __metadata("design:type", String)
], Atendimento.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Atendimento.prototype, "nome_paciente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Atendimento.prototype, "nome_profissional", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.SinaisVitaisSchema }),
    __metadata("design:type", SinaisVitais)
], Atendimento.prototype, "sinais_vitais", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.ExameFisicoSchema }),
    __metadata("design:type", ExameFisico)
], Atendimento.prototype, "exame_fisico", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.HipoteseDiagnosticaSchema], default: [] }),
    __metadata("design:type", Array)
], Atendimento.prototype, "hipoteses_diagnosticas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.CondutaSchema }),
    __metadata("design:type", Conduta)
], Atendimento.prototype, "conduta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.ProcedimentoAtendimentoSchema], default: [] }),
    __metadata("design:type", Array)
], Atendimento.prototype, "procedimentos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.PrescricoesAtendimentoSchema }),
    __metadata("design:type", PrescricoesAtendimento)
], Atendimento.prototype, "prescricoes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.PedidoExameSchema], default: [] }),
    __metadata("design:type", Array)
], Atendimento.prototype, "pedidos_exames", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.AtestadoAtendimentoSchema], default: [] }),
    __metadata("design:type", Array)
], Atendimento.prototype, "atestados", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.DocumentoAnexadoSchema], default: [] }),
    __metadata("design:type", Array)
], Atendimento.prototype, "documentos_anexados", void 0);
exports.Atendimento = Atendimento = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'atendimentos' })
], Atendimento);
exports.AtendimentoSchema = mongoose_1.SchemaFactory.createForClass(Atendimento);
exports.AtendimentoSchema.index({ paciente_id: 1, data_atendimento: 1 });
exports.AtendimentoSchema.index({ profissional_id: 1, data_atendimento: 1 });
exports.AtendimentoSchema.index({ 'hipoteses_diagnosticas.cid_codigo': 1 });
exports.AtendimentoSchema.index({ status: 1 });
exports.AtendimentoSchema.index({ agendamento_id: 1 });
//# sourceMappingURL=atendimento.schema.js.map