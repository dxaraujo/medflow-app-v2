"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContasPagarModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const contas_pagar_controller_1 = require("./contas-pagar.controller");
const contas_pagar_service_1 = require("./contas-pagar.service");
const conta_pagar_schema_1 = require("./schemas/conta-pagar.schema");
let ContasPagarModule = class ContasPagarModule {
};
exports.ContasPagarModule = ContasPagarModule;
exports.ContasPagarModule = ContasPagarModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: conta_pagar_schema_1.ContaPagar.name, schema: conta_pagar_schema_1.ContaPagarSchema },
            ]),
        ],
        controllers: [contas_pagar_controller_1.ContasPagarController],
        providers: [contas_pagar_service_1.ContasPagarService],
        exports: [contas_pagar_service_1.ContasPagarService, mongoose_1.MongooseModule],
    })
], ContasPagarModule);
//# sourceMappingURL=contas-pagar.module.js.map