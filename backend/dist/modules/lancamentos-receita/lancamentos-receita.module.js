"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LancamentosReceitaModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const lancamentos_receita_controller_1 = require("./lancamentos-receita.controller");
const lancamentos_receita_service_1 = require("./lancamentos-receita.service");
const lancamento_receita_schema_1 = require("./schemas/lancamento-receita.schema");
let LancamentosReceitaModule = class LancamentosReceitaModule {
};
exports.LancamentosReceitaModule = LancamentosReceitaModule;
exports.LancamentosReceitaModule = LancamentosReceitaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: lancamento_receita_schema_1.LancamentoReceita.name, schema: lancamento_receita_schema_1.LancamentoReceitaSchema },
            ]),
        ],
        controllers: [lancamentos_receita_controller_1.LancamentosReceitaController],
        providers: [lancamentos_receita_service_1.LancamentosReceitaService],
        exports: [lancamentos_receita_service_1.LancamentosReceitaService, mongoose_1.MongooseModule],
    })
], LancamentosReceitaModule);
//# sourceMappingURL=lancamentos-receita.module.js.map