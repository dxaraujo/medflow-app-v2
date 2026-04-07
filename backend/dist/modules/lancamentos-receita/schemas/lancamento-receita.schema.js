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
exports.LancamentoReceitaSchema = exports.LancamentoReceita = exports.STATUS_PAGAMENTO = exports.FORMA_PAGAMENTO = exports.DadosParticularReceitaSchema = exports.DadosParticularReceita = exports.DadosConvenioReceitaSchema = exports.DadosConvenioReceita = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const data_info_schema_1 = require("../../../common/schemas/data-info.schema");
let DadosConvenioReceita = class DadosConvenioReceita {
    convenio_id;
    numero_guia;
    codigo_procedimento;
    valor_tabela;
    status_faturamento;
};
exports.DadosConvenioReceita = DadosConvenioReceita;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Convenio', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], DadosConvenioReceita.prototype, "convenio_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], DadosConvenioReceita.prototype, "numero_guia", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], DadosConvenioReceita.prototype, "codigo_procedimento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], DadosConvenioReceita.prototype, "valor_tabela", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['pendente', 'enviado', 'pago', 'glosado'],
    }),
    __metadata("design:type", String)
], DadosConvenioReceita.prototype, "status_faturamento", void 0);
exports.DadosConvenioReceita = DadosConvenioReceita = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], DadosConvenioReceita);
exports.DadosConvenioReceitaSchema = mongoose_1.SchemaFactory.createForClass(DadosConvenioReceita);
let DadosParticularReceita = class DadosParticularReceita {
    valor_cobrado;
    valor_pago;
    desconto;
    troco;
};
exports.DadosParticularReceita = DadosParticularReceita;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], DadosParticularReceita.prototype, "valor_cobrado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], DadosParticularReceita.prototype, "valor_pago", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], DadosParticularReceita.prototype, "desconto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], DadosParticularReceita.prototype, "troco", void 0);
exports.DadosParticularReceita = DadosParticularReceita = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], DadosParticularReceita);
exports.DadosParticularReceitaSchema = mongoose_1.SchemaFactory.createForClass(DadosParticularReceita);
exports.FORMA_PAGAMENTO = [
    'dinheiro',
    'cartao_credito',
    'cartao_debito',
    'pix',
    'convenio',
];
exports.STATUS_PAGAMENTO = [
    'pendente',
    'pago',
    'parcial',
    'cancelado',
    'estornado',
];
let LancamentoReceita = class LancamentoReceita {
    atendimento_id;
    paciente_id;
    profissional_id;
    forma_pagamento;
    dados_convenio;
    dados_particular;
    data_pagamento;
    status_pagamento;
    tipo;
    categoria;
    valor_final;
};
exports.LancamentoReceita = LancamentoReceita;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Atendimento', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], LancamentoReceita.prototype, "atendimento_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Paciente', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], LancamentoReceita.prototype, "paciente_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Profissional', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], LancamentoReceita.prototype, "profissional_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: exports.FORMA_PAGAMENTO }),
    __metadata("design:type", String)
], LancamentoReceita.prototype, "forma_pagamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.DadosConvenioReceitaSchema }),
    __metadata("design:type", DadosConvenioReceita)
], LancamentoReceita.prototype, "dados_convenio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.DadosParticularReceitaSchema }),
    __metadata("design:type", DadosParticularReceita)
], LancamentoReceita.prototype, "dados_particular", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], LancamentoReceita.prototype, "data_pagamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: exports.STATUS_PAGAMENTO }),
    __metadata("design:type", String)
], LancamentoReceita.prototype, "status_pagamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: 'receita' }),
    __metadata("design:type", String)
], LancamentoReceita.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: ['particular', 'convenio'] }),
    __metadata("design:type", String)
], LancamentoReceita.prototype, "categoria", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], LancamentoReceita.prototype, "valor_final", void 0);
exports.LancamentoReceita = LancamentoReceita = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'lancamentos_receita' })
], LancamentoReceita);
exports.LancamentoReceitaSchema = mongoose_1.SchemaFactory.createForClass(LancamentoReceita);
exports.LancamentoReceitaSchema.index({ atendimento_id: 1 });
exports.LancamentoReceitaSchema.index({
    'data_pagamento.ano': 1,
    'data_pagamento.mes': 1,
    categoria: 1,
});
exports.LancamentoReceitaSchema.index({
    'dados_convenio.convenio_id': 1,
    'dados_convenio.status_faturamento': 1,
});
exports.LancamentoReceitaSchema.index({ status_pagamento: 1 });
exports.LancamentoReceitaSchema.index({
    profissional_id: 1,
    'data_pagamento.ano': 1,
    'data_pagamento.mes': 1,
});
exports.LancamentoReceitaSchema.index({
    'data_pagamento.ano': 1,
    'data_pagamento.trimestre': 1,
    tipo: 1,
});
//# sourceMappingURL=lancamento-receita.schema.js.map