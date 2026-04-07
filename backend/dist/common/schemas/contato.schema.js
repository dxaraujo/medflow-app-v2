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
exports.ContatoSchema = exports.Contato = exports.ContatoEmergenciaSchema = exports.ContatoEmergencia = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ContatoEmergencia = class ContatoEmergencia {
    nome;
    parentesco;
    telefone;
};
exports.ContatoEmergencia = ContatoEmergencia;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ContatoEmergencia.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ContatoEmergencia.prototype, "parentesco", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ContatoEmergencia.prototype, "telefone", void 0);
exports.ContatoEmergencia = ContatoEmergencia = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ContatoEmergencia);
exports.ContatoEmergenciaSchema = mongoose_1.SchemaFactory.createForClass(ContatoEmergencia);
let Contato = class Contato {
    telefone_principal;
    telefone_secundario;
    email;
    contato_emergencia;
};
exports.Contato = Contato;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Contato.prototype, "telefone_principal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contato.prototype, "telefone_secundario", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Contato.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.ContatoEmergenciaSchema }),
    __metadata("design:type", ContatoEmergencia)
], Contato.prototype, "contato_emergencia", void 0);
exports.Contato = Contato = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Contato);
exports.ContatoSchema = mongoose_1.SchemaFactory.createForClass(Contato);
//# sourceMappingURL=contato.schema.js.map