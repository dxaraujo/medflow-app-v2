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
exports.PacienteSchema = exports.Paciente = exports.ConvenioPacienteSchema = exports.ConvenioPaciente = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const data_info_schema_1 = require("../../../common/schemas/data-info.schema");
const contato_schema_1 = require("../../../common/schemas/contato.schema");
const endereco_schema_1 = require("../../../common/schemas/endereco.schema");
let ConvenioPaciente = class ConvenioPaciente {
    convenio_id;
    numero_carteirinha;
    validade;
    plano;
};
exports.ConvenioPaciente = ConvenioPaciente;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Convenio', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ConvenioPaciente.prototype, "convenio_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ConvenioPaciente.prototype, "numero_carteirinha", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], ConvenioPaciente.prototype, "validade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ConvenioPaciente.prototype, "plano", void 0);
exports.ConvenioPaciente = ConvenioPaciente = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ConvenioPaciente);
exports.ConvenioPacienteSchema = mongoose_1.SchemaFactory.createForClass(ConvenioPaciente);
let Paciente = class Paciente {
    nome_completo;
    data_nascimento;
    sexo;
    cpf;
    rg;
    nome_mae;
    naturalidade;
    contato;
    endereco;
    convenios;
    ativo;
};
exports.Paciente = Paciente;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Paciente.prototype, "nome_completo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: data_info_schema_1.DataInfoSchema, required: true }),
    __metadata("design:type", data_info_schema_1.DataInfo)
], Paciente.prototype, "data_nascimento", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['masculino', 'feminino', 'intersexo'],
    }),
    __metadata("design:type", String)
], Paciente.prototype, "sexo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true, index: true }),
    __metadata("design:type", String)
], Paciente.prototype, "cpf", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Paciente.prototype, "rg", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Paciente.prototype, "nome_mae", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Paciente.prototype, "naturalidade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: contato_schema_1.ContatoSchema, required: true }),
    __metadata("design:type", contato_schema_1.Contato)
], Paciente.prototype, "contato", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: endereco_schema_1.EnderecoSchema, required: true }),
    __metadata("design:type", endereco_schema_1.Endereco)
], Paciente.prototype, "endereco", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.ConvenioPacienteSchema], default: [] }),
    __metadata("design:type", Array)
], Paciente.prototype, "convenios", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: true }),
    __metadata("design:type", Boolean)
], Paciente.prototype, "ativo", void 0);
exports.Paciente = Paciente = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'pacientes' })
], Paciente);
exports.PacienteSchema = mongoose_1.SchemaFactory.createForClass(Paciente);
exports.PacienteSchema.index({ nome_completo: 'text' });
exports.PacienteSchema.index({
    'convenios.convenio_id': 1,
    'convenios.numero_carteirinha': 1,
});
exports.PacienteSchema.index({ ativo: 1 });
//# sourceMappingURL=paciente.schema.js.map