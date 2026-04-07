"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const pacientes_module_1 = require("./modules/pacientes/pacientes.module");
const profissionais_module_1 = require("./modules/profissionais/profissionais.module");
const locais_atendimento_module_1 = require("./modules/locais-atendimento/locais-atendimento.module");
const convenios_module_1 = require("./modules/convenios/convenios.module");
const anamneses_module_1 = require("./modules/anamneses/anamneses.module");
const atendimentos_module_1 = require("./modules/atendimentos/atendimentos.module");
const agendamentos_module_1 = require("./modules/agendamentos/agendamentos.module");
const fila_espera_module_1 = require("./modules/fila-espera/fila-espera.module");
const lancamentos_receita_module_1 = require("./modules/lancamentos-receita/lancamentos-receita.module");
const contas_pagar_module_1 = require("./modules/contas-pagar/contas-pagar.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    uri: config.get('MONGODB_URI', 'mongodb://localhost:27017/medflow'),
                }),
            }),
            pacientes_module_1.PacientesModule,
            profissionais_module_1.ProfissionaisModule,
            locais_atendimento_module_1.LocaisAtendimentoModule,
            convenios_module_1.ConveniosModule,
            anamneses_module_1.AnamnesesModule,
            atendimentos_module_1.AtendimentosModule,
            agendamentos_module_1.AgendamentosModule,
            fila_espera_module_1.FilaEsperaModule,
            lancamentos_receita_module_1.LancamentosReceitaModule,
            contas_pagar_module_1.ContasPagarModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map