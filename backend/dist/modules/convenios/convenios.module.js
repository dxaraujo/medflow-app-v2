"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConveniosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const convenios_controller_1 = require("./convenios.controller");
const convenios_service_1 = require("./convenios.service");
const convenio_schema_1 = require("./schemas/convenio.schema");
let ConveniosModule = class ConveniosModule {
};
exports.ConveniosModule = ConveniosModule;
exports.ConveniosModule = ConveniosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: convenio_schema_1.Convenio.name, schema: convenio_schema_1.ConvenioSchema },
            ]),
        ],
        controllers: [convenios_controller_1.ConveniosController],
        providers: [convenios_service_1.ConveniosService],
        exports: [convenios_service_1.ConveniosService, mongoose_1.MongooseModule],
    })
], ConveniosModule);
//# sourceMappingURL=convenios.module.js.map