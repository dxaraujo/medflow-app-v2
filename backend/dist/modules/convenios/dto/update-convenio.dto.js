"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConvenioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_convenio_dto_1 = require("./create-convenio.dto");
class UpdateConvenioDto extends (0, swagger_1.PartialType)(create_convenio_dto_1.CreateConvenioDto) {
}
exports.UpdateConvenioDto = UpdateConvenioDto;
//# sourceMappingURL=update-convenio.dto.js.map