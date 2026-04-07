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
exports.DataInfoSchema = exports.DataInfo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let DataInfo = class DataInfo {
    data_completa;
    dia;
    mes;
    ano;
    dia_semana;
    semana_ano;
    trimestre;
};
exports.DataInfo = DataInfo;
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], DataInfo.prototype, "data_completa", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 1, max: 31 }),
    __metadata("design:type", Number)
], DataInfo.prototype, "dia", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 1, max: 12 }),
    __metadata("design:type", Number)
], DataInfo.prototype, "mes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], DataInfo.prototype, "ano", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 0, max: 6 }),
    __metadata("design:type", Number)
], DataInfo.prototype, "dia_semana", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 1, max: 53 }),
    __metadata("design:type", Number)
], DataInfo.prototype, "semana_ano", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 1, max: 4 }),
    __metadata("design:type", Number)
], DataInfo.prototype, "trimestre", void 0);
exports.DataInfo = DataInfo = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], DataInfo);
exports.DataInfoSchema = mongoose_1.SchemaFactory.createForClass(DataInfo);
//# sourceMappingURL=data-info.schema.js.map