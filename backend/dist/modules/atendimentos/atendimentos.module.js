"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtendimentosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const atendimentos_controller_1 = require("./atendimentos.controller");
const atendimentos_service_1 = require("./atendimentos.service");
const atendimento_schema_1 = require("./schemas/atendimento.schema");
let AtendimentosModule = class AtendimentosModule {
};
exports.AtendimentosModule = AtendimentosModule;
exports.AtendimentosModule = AtendimentosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: atendimento_schema_1.Atendimento.name, schema: atendimento_schema_1.AtendimentoSchema },
            ]),
        ],
        controllers: [atendimentos_controller_1.AtendimentosController],
        providers: [atendimentos_service_1.AtendimentosService],
        exports: [atendimentos_service_1.AtendimentosService, mongoose_1.MongooseModule],
    })
], AtendimentosModule);
//# sourceMappingURL=atendimentos.module.js.map