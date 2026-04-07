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
exports.CreateAtendimentoDto = exports.DocumentoAnexadoDto = exports.AtestadoAtendimentoDto = exports.PedidoExameDto = exports.PrescricoesAtendimentoDto = exports.ItemPrescricaoDto = exports.ProcedimentoAtendimentoDto = exports.CondutaDto = exports.HipoteseDiagnosticaDto = exports.ExameFisicoDto = exports.SegmentarExameFisicoDto = exports.SegmentoExameFisicoDto = exports.SinaisVitaisDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const data_info_dto_1 = require("../../../common/dto/data-info.dto");
const atendimento_schema_1 = require("../schemas/atendimento.schema");
class SinaisVitaisDto {
    pressao_arterial_sistolica;
    pressao_arterial_diastolica;
    frequencia_cardiaca;
    frequencia_respiratoria;
    temperatura;
    saturacao_o2;
    peso;
    altura;
    imc;
    glicemia_capilar;
    observacoes_vitais;
}
exports.SinaisVitaisDto = SinaisVitaisDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "pressao_arterial_sistolica", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "pressao_arterial_diastolica", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "frequencia_cardiaca", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "frequencia_respiratoria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "temperatura", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "saturacao_o2", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "peso", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "altura", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "imc", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SinaisVitaisDto.prototype, "glicemia_capilar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SinaisVitaisDto.prototype, "observacoes_vitais", void 0);
class SegmentoExameFisicoDto {
    normal;
    descricao;
}
exports.SegmentoExameFisicoDto = SegmentoExameFisicoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SegmentoExameFisicoDto.prototype, "normal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SegmentoExameFisicoDto.prototype, "descricao", void 0);
class SegmentarExameFisicoDto {
    cabeca_pescoco;
    torax_pulmoes;
    cardiovascular;
    abdomen;
    extremidades;
    neurologico;
    pele;
}
exports.SegmentarExameFisicoDto = SegmentarExameFisicoDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: SegmentoExameFisicoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SegmentoExameFisicoDto),
    __metadata("design:type", SegmentoExameFisicoDto)
], SegmentarExameFisicoDto.prototype, "cabeca_pescoco", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: SegmentoExameFisicoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SegmentoExameFisicoDto),
    __metadata("design:type", SegmentoExameFisicoDto)
], SegmentarExameFisicoDto.prototype, "torax_pulmoes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: SegmentoExameFisicoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SegmentoExameFisicoDto),
    __metadata("design:type", SegmentoExameFisicoDto)
], SegmentarExameFisicoDto.prototype, "cardiovascular", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: SegmentoExameFisicoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SegmentoExameFisicoDto),
    __metadata("design:type", SegmentoExameFisicoDto)
], SegmentarExameFisicoDto.prototype, "abdomen", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: SegmentoExameFisicoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SegmentoExameFisicoDto),
    __metadata("design:type", SegmentoExameFisicoDto)
], SegmentarExameFisicoDto.prototype, "extremidades", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: SegmentoExameFisicoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SegmentoExameFisicoDto),
    __metadata("design:type", SegmentoExameFisicoDto)
], SegmentarExameFisicoDto.prototype, "neurologico", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: SegmentoExameFisicoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SegmentoExameFisicoDto),
    __metadata("design:type", SegmentoExameFisicoDto)
], SegmentarExameFisicoDto.prototype, "pele", void 0);
class ExameFisicoDto {
    estado_geral;
    segmentar;
    exame_fisico_complementar;
}
exports.ExameFisicoDto = ExameFisicoDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExameFisicoDto.prototype, "estado_geral", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: SegmentarExameFisicoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SegmentarExameFisicoDto),
    __metadata("design:type", SegmentarExameFisicoDto)
], ExameFisicoDto.prototype, "segmentar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExameFisicoDto.prototype, "exame_fisico_complementar", void 0);
class HipoteseDiagnosticaDto {
    descricao;
    cid_codigo;
    cid_descricao;
    tipo;
    status;
}
exports.HipoteseDiagnosticaDto = HipoteseDiagnosticaDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HipoteseDiagnosticaDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HipoteseDiagnosticaDto.prototype, "cid_codigo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HipoteseDiagnosticaDto.prototype, "cid_descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['principal', 'secundaria'] }),
    (0, class_validator_1.IsEnum)(['principal', 'secundaria']),
    __metadata("design:type", String)
], HipoteseDiagnosticaDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['hipotese', 'confirmado'] }),
    (0, class_validator_1.IsEnum)(['hipotese', 'confirmado']),
    __metadata("design:type", String)
], HipoteseDiagnosticaDto.prototype, "status", void 0);
class CondutaDto {
    plano_terapeutico;
    orientacoes_paciente;
}
exports.CondutaDto = CondutaDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CondutaDto.prototype, "plano_terapeutico", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CondutaDto.prototype, "orientacoes_paciente", void 0);
class ProcedimentoAtendimentoDto {
    descricao_procedimento;
    codigo_procedimento;
    data;
    observacoes;
}
exports.ProcedimentoAtendimentoDto = ProcedimentoAtendimentoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProcedimentoAtendimentoDto.prototype, "descricao_procedimento", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProcedimentoAtendimentoDto.prototype, "codigo_procedimento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], ProcedimentoAtendimentoDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProcedimentoAtendimentoDto.prototype, "observacoes", void 0);
class ItemPrescricaoDto {
    nome_medicamento;
    principio_ativo;
    dosagem;
    via_administracao;
    frequencia;
    duracao;
    quantidade;
    observacoes;
}
exports.ItemPrescricaoDto = ItemPrescricaoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemPrescricaoDto.prototype, "nome_medicamento", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemPrescricaoDto.prototype, "principio_ativo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemPrescricaoDto.prototype, "dosagem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: atendimento_schema_1.VIAS_ADMINISTRACAO }),
    (0, class_validator_1.IsEnum)(atendimento_schema_1.VIAS_ADMINISTRACAO),
    __metadata("design:type", String)
], ItemPrescricaoDto.prototype, "via_administracao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemPrescricaoDto.prototype, "frequencia", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemPrescricaoDto.prototype, "duracao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemPrescricaoDto.prototype, "quantidade", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemPrescricaoDto.prototype, "observacoes", void 0);
class PrescricoesAtendimentoDto {
    tipo_receita;
    numero_receita;
    itens;
}
exports.PrescricoesAtendimentoDto = PrescricoesAtendimentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['simples', 'especial', 'controle_especial'] }),
    (0, class_validator_1.IsEnum)(['simples', 'especial', 'controle_especial']),
    __metadata("design:type", String)
], PrescricoesAtendimentoDto.prototype, "tipo_receita", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PrescricoesAtendimentoDto.prototype, "numero_receita", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ItemPrescricaoDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ItemPrescricaoDto),
    __metadata("design:type", Array)
], PrescricoesAtendimentoDto.prototype, "itens", void 0);
class PedidoExameDto {
    tipo_exame;
    descricao_exame;
    codigo_exame;
    justificativa_clinica;
    urgencia;
    status;
    data_solicitacao;
    data_resultado;
    resultado_resumo;
    arquivo_resultado_ref;
}
exports.PedidoExameDto = PedidoExameDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['laboratorial', 'imagem', 'outro'] }),
    (0, class_validator_1.IsEnum)(['laboratorial', 'imagem', 'outro']),
    __metadata("design:type", String)
], PedidoExameDto.prototype, "tipo_exame", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PedidoExameDto.prototype, "descricao_exame", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PedidoExameDto.prototype, "codigo_exame", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PedidoExameDto.prototype, "justificativa_clinica", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['rotina', 'urgente'] }),
    (0, class_validator_1.IsEnum)(['rotina', 'urgente']),
    __metadata("design:type", String)
], PedidoExameDto.prototype, "urgencia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['solicitado', 'realizado', 'resultado_disponivel'] }),
    (0, class_validator_1.IsEnum)(['solicitado', 'realizado', 'resultado_disponivel']),
    __metadata("design:type", String)
], PedidoExameDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], PedidoExameDto.prototype, "data_solicitacao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], PedidoExameDto.prototype, "data_resultado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PedidoExameDto.prototype, "resultado_resumo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PedidoExameDto.prototype, "arquivo_resultado_ref", void 0);
class AtestadoAtendimentoDto {
    tipo;
    descricao;
    cid_codigo;
    dias_afastamento;
    data_emissao;
}
exports.AtestadoAtendimentoDto = AtestadoAtendimentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['atestado_medico', 'declaracao_comparecimento', 'laudo', 'outro'],
    }),
    (0, class_validator_1.IsEnum)(['atestado_medico', 'declaracao_comparecimento', 'laudo', 'outro']),
    __metadata("design:type", String)
], AtestadoAtendimentoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AtestadoAtendimentoDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AtestadoAtendimentoDto.prototype, "cid_codigo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AtestadoAtendimentoDto.prototype, "dias_afastamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], AtestadoAtendimentoDto.prototype, "data_emissao", void 0);
class DocumentoAnexadoDto {
    tipo_documento;
    descricao;
    nome_arquivo;
    caminho_armazenamento;
    mime_type;
    tamanho_bytes;
    data_upload;
    profissional_upload_id;
}
exports.DocumentoAnexadoDto = DocumentoAnexadoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: atendimento_schema_1.TIPOS_DOCUMENTO_ANEXO }),
    (0, class_validator_1.IsEnum)(atendimento_schema_1.TIPOS_DOCUMENTO_ANEXO),
    __metadata("design:type", String)
], DocumentoAnexadoDto.prototype, "tipo_documento", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoAnexadoDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoAnexadoDto.prototype, "nome_arquivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoAnexadoDto.prototype, "caminho_armazenamento", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocumentoAnexadoDto.prototype, "mime_type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DocumentoAnexadoDto.prototype, "tamanho_bytes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], DocumentoAnexadoDto.prototype, "data_upload", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do profissional que fez o upload' }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], DocumentoAnexadoDto.prototype, "profissional_upload_id", void 0);
class CreateAtendimentoDto {
    paciente_id;
    profissional_id;
    local_atendimento_id;
    agendamento_id;
    data_atendimento;
    tipo_atendimento;
    status;
    nome_paciente;
    nome_profissional;
    sinais_vitais;
    exame_fisico;
    hipoteses_diagnosticas;
    conduta;
    procedimentos;
    prescricoes;
    pedidos_exames;
    atestados;
    documentos_anexados;
}
exports.CreateAtendimentoDto = CreateAtendimentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do paciente' }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "paciente_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do profissional' }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "profissional_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do local de atendimento' }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "local_atendimento_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID do agendamento vinculado' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "agendamento_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: data_info_dto_1.CreateDataInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => data_info_dto_1.CreateDataInfoDto),
    __metadata("design:type", data_info_dto_1.CreateDataInfoDto)
], CreateAtendimentoDto.prototype, "data_atendimento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: atendimento_schema_1.TIPOS_ATENDIMENTO }),
    (0, class_validator_1.IsEnum)(atendimento_schema_1.TIPOS_ATENDIMENTO),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "tipo_atendimento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: atendimento_schema_1.STATUS_ATENDIMENTO }),
    (0, class_validator_1.IsEnum)(atendimento_schema_1.STATUS_ATENDIMENTO),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome do paciente (desnormalizado)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "nome_paciente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome do profissional (desnormalizado)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "nome_profissional", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: SinaisVitaisDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SinaisVitaisDto),
    __metadata("design:type", SinaisVitaisDto)
], CreateAtendimentoDto.prototype, "sinais_vitais", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: ExameFisicoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ExameFisicoDto),
    __metadata("design:type", ExameFisicoDto)
], CreateAtendimentoDto.prototype, "exame_fisico", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [HipoteseDiagnosticaDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => HipoteseDiagnosticaDto),
    __metadata("design:type", Array)
], CreateAtendimentoDto.prototype, "hipoteses_diagnosticas", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: CondutaDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CondutaDto),
    __metadata("design:type", CondutaDto)
], CreateAtendimentoDto.prototype, "conduta", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [ProcedimentoAtendimentoDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ProcedimentoAtendimentoDto),
    __metadata("design:type", Array)
], CreateAtendimentoDto.prototype, "procedimentos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: PrescricoesAtendimentoDto }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PrescricoesAtendimentoDto),
    __metadata("design:type", PrescricoesAtendimentoDto)
], CreateAtendimentoDto.prototype, "prescricoes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [PedidoExameDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PedidoExameDto),
    __metadata("design:type", Array)
], CreateAtendimentoDto.prototype, "pedidos_exames", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [AtestadoAtendimentoDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AtestadoAtendimentoDto),
    __metadata("design:type", Array)
], CreateAtendimentoDto.prototype, "atestados", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [DocumentoAnexadoDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => DocumentoAnexadoDto),
    __metadata("design:type", Array)
], CreateAtendimentoDto.prototype, "documentos_anexados", void 0);
//# sourceMappingURL=create-atendimento.dto.js.map