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
exports.ContaPagarSchema = exports.ContaPagar = exports.STATUS_CONTA = exports.CATEGORIA_DESPESA = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const data_info_schema_1 = require("../../../common/schemas/data-info.schema");
exports.CATEGORIA_DESPESA = [
    'aluguel',
    'material',
    'salario',
    'servico',
    'imposto',
    'outro',
];
exports.STATUS_CONTA = [
    'pendente',
    'pago',
    'vencido',
    'cancelado',
];
let ContaPagar = class ContaPagar {
    descricao;
    fornecedor;
    categoria_despesa;
    valor;
    data_vencimento;
    data_pagamento;
    status;
    forma_pagamento;
    recorrente;
    observacoes;
    tipo;
    categoria;
};
exports.ContaPagar = ContaPagar;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ContaPagar.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ContaPagar.prototype, "fornecedor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: exports.CATEGORIA_DESPESA }),
    __metadata("design:type", String)
], ContaPagar.prototype, "categoria_despesa", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], ContaPagar.prototype, "valor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], ContaPagar.prototype, "data_vencimento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], ContaPagar.prototype, "data_pagamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: exports.STATUS_CONTA }),
    __metadata("design:type", String)
], ContaPagar.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ContaPagar.prototype, "forma_pagamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], ContaPagar.prototype, "recorrente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ContaPagar.prototype, "observacoes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: 'despesa' }),
    __metadata("design:type", String)
], ContaPagar.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ContaPagar.prototype, "categoria", void 0);
exports.ContaPagar = ContaPagar = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'contas_pagar' })
], ContaPagar);
exports.ContaPagarSchema = mongoose_1.SchemaFactory.createForClass(ContaPagar);
exports.ContaPagarSchema.index({ status: 1, 'data_vencimento.data_completa': 1 });
exports.ContaPagarSchema.index({ 'data_vencimento.ano': 1, 'data_vencimento.mes': 1 });
exports.ContaPagarSchema.index({
    categoria_despesa: 1,
    'data_vencimento.ano': 1,
    'data_vencimento.mes': 1,
});
exports.ContaPagarSchema.index({
    'data_vencimento.ano': 1,
    'data_vencimento.trimestre': 1,
    tipo: 1,
});
//# sourceMappingURL=conta-pagar.schema.js.map