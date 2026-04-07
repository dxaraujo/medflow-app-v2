"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaEsperaModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const fila_espera_controller_1 = require("./fila-espera.controller");
const fila_espera_service_1 = require("./fila-espera.service");
const fila_espera_schema_1 = require("./schemas/fila-espera.schema");
let FilaEsperaModule = class FilaEsperaModule {
};
exports.FilaEsperaModule = FilaEsperaModule;
exports.FilaEsperaModule = FilaEsperaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: fila_espera_schema_1.FilaEspera.name, schema: fila_espera_schema_1.FilaEsperaSchema },
            ]),
        ],
        controllers: [fila_espera_controller_1.FilaEsperaController],
        providers: [fila_espera_service_1.FilaEsperaService],
        exports: [fila_espera_service_1.FilaEsperaService, mongoose_1.MongooseModule],
    })
], FilaEsperaModule);
//# sourceMappingURL=fila-espera.module.js.map