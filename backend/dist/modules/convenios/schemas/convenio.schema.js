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
exports.ConvenioSchema = exports.Convenio = exports.TabelaProcedimentoSchema = exports.TabelaProcedimento = exports.ContatoConvenioSchema = exports.ContatoConvenio = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ContatoConvenio = class ContatoConvenio {
    telefone;
    email;
    representante;
};
exports.ContatoConvenio = ContatoConvenio;
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ContatoConvenio.prototype, "telefone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ContatoConvenio.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ContatoConvenio.prototype, "representante", void 0);
exports.ContatoConvenio = ContatoConvenio = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ContatoConvenio);
exports.ContatoConvenioSchema = mongoose_1.SchemaFactory.createForClass(ContatoConvenio);
let TabelaProcedimento = class TabelaProcedimento {
    codigo;
    descricao;
    valor;
};
exports.TabelaProcedimento = TabelaProcedimento;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], TabelaProcedimento.prototype, "codigo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], TabelaProcedimento.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], TabelaProcedimento.prototype, "valor", void 0);
exports.TabelaProcedimento = TabelaProcedimento = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], TabelaProcedimento);
exports.TabelaProcedimentoSchema = mongoose_1.SchemaFactory.createForClass(TabelaProcedimento);
let Convenio = class Convenio {
    nome_convenio;
    codigo_ans;
    contato;
    tabela_procedimentos;
    ativo;
};
exports.Convenio = Convenio;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Convenio.prototype, "nome_convenio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, unique: true, sparse: true }),
    __metadata("design:type", String)
], Convenio.prototype, "codigo_ans", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.ContatoConvenioSchema }),
    __metadata("design:type", ContatoConvenio)
], Convenio.prototype, "contato", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.TabelaProcedimentoSchema], default: [] }),
    __metadata("design:type", Array)
], Convenio.prototype, "tabela_procedimentos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: true }),
    __metadata("design:type", Boolean)
], Convenio.prototype, "ativo", void 0);
exports.Convenio = Convenio = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'convenios' })
], Convenio);
exports.ConvenioSchema = mongoose_1.SchemaFactory.createForClass(Convenio);
exports.ConvenioSchema.index({ nome_convenio: 'text' });
exports.ConvenioSchema.index({ 'tabela_procedimentos.codigo': 1 });
//# sourceMappingURL=convenio.schema.js.map