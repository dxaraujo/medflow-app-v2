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
exports.ProfissionalSchema = exports.Profissional = exports.RegistroProfissionalSchema = exports.RegistroProfissional = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const contato_schema_1 = require("../../../common/schemas/contato.schema");
let RegistroProfissional = class RegistroProfissional {
    crm;
    uf_crm;
    especialidades;
};
exports.RegistroProfissional = RegistroProfissional;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], RegistroProfissional.prototype, "crm", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, minlength: 2, maxlength: 2 }),
    __metadata("design:type", String)
], RegistroProfissional.prototype, "uf_crm", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], RegistroProfissional.prototype, "especialidades", void 0);
exports.RegistroProfissional = RegistroProfissional = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], RegistroProfissional);
exports.RegistroProfissionalSchema = mongoose_1.SchemaFactory.createForClass(RegistroProfissional);
let Profissional = class Profissional {
    nome_completo;
    cpf;
    perfil;
    registro_profissional;
    contato;
    locais_vinculados;
    ativo;
};
exports.Profissional = Profissional;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Profissional.prototype, "nome_completo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true, index: true }),
    __metadata("design:type", String)
], Profissional.prototype, "cpf", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, enum: ['medico', 'atendente'] }),
    __metadata("design:type", String)
], Profissional.prototype, "perfil", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.RegistroProfissionalSchema }),
    __metadata("design:type", RegistroProfissional)
], Profissional.prototype, "registro_profissional", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: contato_schema_1.ContatoSchema, required: true }),
    __metadata("design:type", contato_schema_1.Contato)
], Profissional.prototype, "contato", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose_2.Types.ObjectId, ref: 'LocalAtendimento' }],
        default: [],
    }),
    __metadata("design:type", Array)
], Profissional.prototype, "locais_vinculados", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: true }),
    __metadata("design:type", Boolean)
], Profissional.prototype, "ativo", void 0);
exports.Profissional = Profissional = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'profissionais' })
], Profissional);
exports.ProfissionalSchema = mongoose_1.SchemaFactory.createForClass(Profissional);
exports.ProfissionalSchema.index({ 'registro_profissional.crm': 1, 'registro_profissional.uf_crm': 1 }, { unique: true, sparse: true });
exports.ProfissionalSchema.index({ perfil: 1, ativo: 1 });
exports.ProfissionalSchema.index({ nome_completo: 'text' });
//# sourceMappingURL=profissional.schema.js.map