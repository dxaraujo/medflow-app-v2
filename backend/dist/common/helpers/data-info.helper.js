"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDataInfo = buildDataInfo;
function buildDataInfo(date) {
    const d = new Date(date);
    const startOfYear = new Date(d.getFullYear(), 0, 1);
    const diff = d.getTime() - startOfYear.getTime();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    return {
        data_completa: d,
        dia: d.getUTCDate(),
        mes: d.getUTCMonth() + 1,
        ano: d.getUTCFullYear(),
        dia_semana: d.getUTCDay(),
        semana_ano: Math.ceil((diff / oneWeek + startOfYear.getUTCDay() + 1) / 1),
        trimestre: Math.ceil((d.getUTCMonth() + 1) / 3),
    };
}
//# sourceMappingURL=data-info.helper.js.map