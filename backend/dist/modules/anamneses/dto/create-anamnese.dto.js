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
exports.CreateAnamneseDto = exports.CampoEspecialidadeAnamneseDto = exports.HistoriaDoencaAtualAnamneseDto = exports.AntecedentesPessoaisAnamneseDto = exports.HabitosVidaAnamneseDto = exports.SonoAnamneseDto = exports.AtividadeFisicaAnamneseDto = exports.EtilismoAnamneseDto = exports.TabagismoAnamneseDto = exports.AlergiaAnamneseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const data_info_dto_1 = require("../../../common/dto/data-info.dto");
class AlergiaAnamneseDto {
    tipo;
    substancia;
    gravidade;
    reacao;
}
exports.AlergiaAnamneseDto = AlergiaAnamneseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['medicamento', 'alimento', 'outro'] }),
    (0, class_validator_1.IsEnum)(['medicamento', 'alimento', 'outro']),
    __metadata("design:type", String)
], AlergiaAnamneseDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Penicilina' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AlergiaAnamneseDto.prototype, "substancia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['leve', 'moderada', 'grave'] }),
    (0, class_validator_1.IsEnum)(['leve', 'moderada', 'grave']),
    __metadata("design:type", String)
], AlergiaAnamneseDto.prototype, "gravidade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Urticária' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AlergiaAnamneseDto.prototype, "reacao", void 0);
class TabagismoAnamneseDto {
    status;
    quantidade_por_dia;
    tempo_anos;
}
exports.TabagismoAnamneseDto = TabagismoAnamneseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['nunca', 'ex', 'atual'] }),
    (0, class_validator_1.IsEnum)(['nunca', 'ex', 'atual']),
    __metadata("design:type", String)
], TabagismoAnamneseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TabagismoAnamneseDto.prototype, "quantidade_por_dia", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TabagismoAnamneseDto.prototype, "tempo_anos", void 0);
class EtilismoAnamneseDto {
    status;
    frequencia;
    tipo;
}
exports.EtilismoAnamneseDto = EtilismoAnamneseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['nunca', 'social', 'regular', 'ex'] }),
    (0, class_validator_1.IsEnum)(['nunca', 'social', 'regular', 'ex']),
    __metadata("design:type", String)
], EtilismoAnamneseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EtilismoAnamneseDto.prototype, "frequencia", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EtilismoAnamneseDto.prototype, "tipo", void 0);
class AtividadeFisicaAnamneseDto {
    pratica;
    tipo;
    frequencia_semanal;
}
exports.AtividadeFisicaAnamneseDto = AtividadeFisicaAnamneseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AtividadeFisicaAnamneseDto.prototype, "pratica", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AtividadeFisicaAnamneseDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '3x por semana' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AtividadeFisicaAnamneseDto.prototype, "frequencia_semanal", void 0);
class SonoAnamneseDto {
    qualidade;
    horas_por_noite;
}
exports.SonoAnamneseDto = SonoAnamneseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['boa', 'regular', 'ruim'] }),
    (0, class_validator_1.IsEnum)(['boa', 'regular', 'ruim']),
    __metadata("design:type", String)
], SonoAnamneseDto.prototype, "qualidade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 7 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SonoAnamneseDto.prototype, "horas_por_noite", void 0);
class HabitosVidaAnamneseDto {
    tabagismo;
    etilismo;
    atividade_fisica;
    alimentacao;
    sono;
}
exports.HabitosVidaAnamneseDto = HabitosVidaAnamneseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: TabagismoAnamneseDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TabagismoAnamneseDto),
    __metadata("design:type", TabagismoAnamneseDto)
], HabitosVidaAnamneseDto.prototype, "tabagismo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: EtilismoAnamneseDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => EtilismoAnamneseDto),
    __metadata("design:type", EtilismoAnamneseDto)
], HabitosVidaAnamneseDto.prototype, "etilismo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AtividadeFisicaAnamneseDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AtividadeFisicaAnamneseDto),
    __metadata("design:type", AtividadeFisicaAnamneseDto)
], HabitosVidaAnamneseDto.prototype, "atividade_fisica", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HabitosVidaAnamneseDto.prototype, "alimentacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: SonoAnamneseDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SonoAnamneseDto),
    __metadata("design:type", SonoAnamneseDto)
], HabitosVidaAnamneseDto.prototype, "sono", void 0);
class AntecedentesPessoaisAnamneseDto {
    doencas_previas;
    cirurgias;
    alergias;
    medicamentos_uso_continuo;
    internacoes;
}
exports.AntecedentesPessoaisAnamneseDto = AntecedentesPessoaisAnamneseDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamneseDto.prototype, "doencas_previas", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamneseDto.prototype, "cirurgias", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [AlergiaAnamneseDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AlergiaAnamneseDto),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamneseDto.prototype, "alergias", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamneseDto.prototype, "medicamentos_uso_continuo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AntecedentesPessoaisAnamneseDto.prototype, "internacoes", void 0);
class HistoriaDoencaAtualAnamneseDto {
    descricao;
    data_inicio_sintomas;
    localizacao;
    intensidade;
    fatores_melhora;
    fatores_piora;
}
exports.HistoriaDoencaAtualAnamneseDto = HistoriaDoencaAtualAnamneseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HistoriaDoencaAtualAnamneseDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], HistoriaDoencaAtualAnamneseDto.prototype, "data_inicio_sintomas", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HistoriaDoencaAtualAnamneseDto.prototype, "localizacao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 0, maximum: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", Number)
], HistoriaDoencaAtualAnamneseDto.prototype, "intensidade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HistoriaDoencaAtualAnamneseDto.prototype, "fatores_melhora", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HistoriaDoencaAtualAnamneseDto.prototype, "fatores_piora", void 0);
class CampoEspecialidadeAnamneseDto {
    chave;
    valor;
}
exports.CampoEspecialidadeAnamneseDto = CampoEspecialidadeAnamneseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CampoEspecialidadeAnamneseDto.prototype, "chave", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Valor flexível por especialidade' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CampoEspecialidadeAnamneseDto.prototype, "valor", void 0);
class CreateAnamneseDto {
    paciente_id;
    profissional_criacao_id;
    data_criacao;
    queixa_principal;
    historia_doenca_atual;
    antecedentes_pessoais;
    antecedentes_familiares;
    habitos_vida;
    campos_especialidade;
    cids;
}
exports.CreateAnamneseDto = CreateAnamneseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do paciente' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnamneseDto.prototype, "paciente_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do profissional que criou o registro' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnamneseDto.prototype, "profissional_criacao_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], CreateAnamneseDto.prototype, "data_criacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnamneseDto.prototype, "queixa_principal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: HistoriaDoencaAtualAnamneseDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => HistoriaDoencaAtualAnamneseDto),
    __metadata("design:type", HistoriaDoencaAtualAnamneseDto)
], CreateAnamneseDto.prototype, "historia_doenca_atual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AntecedentesPessoaisAnamneseDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => AntecedentesPessoaisAnamneseDto),
    __metadata("design:type", AntecedentesPessoaisAnamneseDto)
], CreateAnamneseDto.prototype, "antecedentes_pessoais", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateAnamneseDto.prototype, "antecedentes_familiares", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: HabitosVidaAnamneseDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => HabitosVidaAnamneseDto),
    __metadata("design:type", HabitosVidaAnamneseDto)
], CreateAnamneseDto.prototype, "habitos_vida", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [CampoEspecialidadeAnamneseDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CampoEspecialidadeAnamneseDto),
    __metadata("design:type", Array)
], CreateAnamneseDto.prototype, "campos_especialidade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Códigos CID para indexação',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateAnamneseDto.prototype, "cids", void 0);
//# sourceMappingURL=create-anamnese.dto.js.map