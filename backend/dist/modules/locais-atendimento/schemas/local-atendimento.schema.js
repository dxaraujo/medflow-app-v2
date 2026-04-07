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
exports.LocalAtendimentoSchema = exports.LocalAtendimento = exports.ConfiguracaoProfissionalSchema = exports.ConfiguracaoProfissional = exports.DuracoesPorTipoSchema = exports.DuracoesPorTipo = exports.HorarioFuncionamentoSchema = exports.HorarioFuncionamento = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const endereco_schema_1 = require("../../../common/schemas/endereco.schema");
let HorarioFuncionamento = class HorarioFuncionamento {
    dia_semana;
    hora_inicio;
    hora_fim;
};
exports.HorarioFuncionamento = HorarioFuncionamento;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 0, max: 6 }),
    __metadata("design:type", Number)
], HorarioFuncionamento.prototype, "dia_semana", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], HorarioFuncionamento.prototype, "hora_inicio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], HorarioFuncionamento.prototype, "hora_fim", void 0);
exports.HorarioFuncionamento = HorarioFuncionamento = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], HorarioFuncionamento);
exports.HorarioFuncionamentoSchema = mongoose_1.SchemaFactory.createForClass(HorarioFuncionamento);
let DuracoesPorTipo = class DuracoesPorTipo {
    primeira_consulta;
    consulta;
    retorno;
    encaixe;
    telemedicina;
};
exports.DuracoesPorTipo = DuracoesPorTipo;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 5, max: 120 }),
    __metadata("design:type", Number)
], DuracoesPorTipo.prototype, "primeira_consulta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 5, max: 120 }),
    __metadata("design:type", Number)
], DuracoesPorTipo.prototype, "consulta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 5, max: 120 }),
    __metadata("design:type", Number)
], DuracoesPorTipo.prototype, "retorno", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 5, max: 120 }),
    __metadata("design:type", Number)
], DuracoesPorTipo.prototype, "encaixe", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 5, max: 120 }),
    __metadata("design:type", Number)
], DuracoesPorTipo.prototype, "telemedicina", void 0);
exports.DuracoesPorTipo = DuracoesPorTipo = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], DuracoesPorTipo);
exports.DuracoesPorTipoSchema = mongoose_1.SchemaFactory.createForClass(DuracoesPorTipo);
let ConfiguracaoProfissional = class ConfiguracaoProfissional {
    profissional_id;
    horarios_funcionamento;
    duracoes_por_tipo;
};
exports.ConfiguracaoProfissional = ConfiguracaoProfissional;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Profissional', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ConfiguracaoProfissional.prototype, "profissional_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.HorarioFuncionamentoSchema], default: [] }),
    __metadata("design:type", Array)
], ConfiguracaoProfissional.prototype, "horarios_funcionamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.DuracoesPorTipoSchema, required: true }),
    __metadata("design:type", DuracoesPorTipo)
], ConfiguracaoProfissional.prototype, "duracoes_por_tipo", void 0);
exports.ConfiguracaoProfissional = ConfiguracaoProfissional = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ConfiguracaoProfissional);
exports.ConfiguracaoProfissionalSchema = mongoose_1.SchemaFactory.createForClass(ConfiguracaoProfissional);
let LocalAtendimento = class LocalAtendimento {
    nome;
    endereco;
    telefone;
    cnes;
    ativo;
    configuracoes_profissionais;
};
exports.LocalAtendimento = LocalAtendimento;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], LocalAtendimento.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: endereco_schema_1.EnderecoSchema, required: true }),
    __metadata("design:type", endereco_schema_1.Endereco)
], LocalAtendimento.prototype, "endereco", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], LocalAtendimento.prototype, "telefone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], LocalAtendimento.prototype, "cnes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: true }),
    __metadata("design:type", Boolean)
], LocalAtendimento.prototype, "ativo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.ConfiguracaoProfissionalSchema], default: [] }),
    __metadata("design:type", Array)
], LocalAtendimento.prototype, "configuracoes_profissionais", void 0);
exports.LocalAtendimento = LocalAtendimento = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'locais_atendimento' })
], LocalAtendimento);
exports.LocalAtendimentoSchema = mongoose_1.SchemaFactory.createForClass(LocalAtendimento);
exports.LocalAtendimentoSchema.index({ nome: 'text' });
exports.LocalAtendimentoSchema.index({ ativo: 1 });
exports.LocalAtendimentoSchema.index({
    'configuracoes_profissionais.profissional_id': 1,
});
//# sourceMappingURL=local-atendimento.schema.js.map