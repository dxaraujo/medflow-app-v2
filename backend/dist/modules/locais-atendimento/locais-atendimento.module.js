"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaisAtendimentoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const locais_atendimento_controller_1 = require("./locais-atendimento.controller");
const locais_atendimento_service_1 = require("./locais-atendimento.service");
const local_atendimento_schema_1 = require("./schemas/local-atendimento.schema");
let LocaisAtendimentoModule = class LocaisAtendimentoModule {
};
exports.LocaisAtendimentoModule = LocaisAtendimentoModule;
exports.LocaisAtendimentoModule = LocaisAtendimentoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: local_atendimento_schema_1.LocalAtendimento.name, schema: local_atendimento_schema_1.LocalAtendimentoSchema },
            ]),
        ],
        controllers: [locais_atendimento_controller_1.LocaisAtendimentoController],
        providers: [locais_atendimento_service_1.LocaisAtendimentoService],
        exports: [locais_atendimento_service_1.LocaisAtendimentoService, mongoose_1.MongooseModule],
    })
], LocaisAtendimentoModule);
//# sourceMappingURL=locais-atendimento.module.js.map