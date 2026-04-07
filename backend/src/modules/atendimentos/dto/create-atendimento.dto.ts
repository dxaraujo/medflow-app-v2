import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsMongoId,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';
import {
  TIPOS_ATENDIMENTO,
  STATUS_ATENDIMENTO,
  VIAS_ADMINISTRACAO,
  TIPOS_DOCUMENTO_ANEXO,
} from '../schemas/atendimento.schema';

export class SinaisVitaisDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  pressao_arterial_sistolica?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  pressao_arterial_diastolica?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  frequencia_cardiaca?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  frequencia_respiratoria?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  temperatura?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  saturacao_o2?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  peso?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  altura?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  imc?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  glicemia_capilar?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  observacoes_vitais?: string;
}

export class SegmentoExameFisicoDto {
  @ApiProperty()
  @IsBoolean()
  normal: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  descricao?: string;
}

export class SegmentarExameFisicoDto {
  @ApiPropertyOptional({ type: SegmentoExameFisicoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SegmentoExameFisicoDto)
  cabeca_pescoco?: SegmentoExameFisicoDto;

  @ApiPropertyOptional({ type: SegmentoExameFisicoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SegmentoExameFisicoDto)
  torax_pulmoes?: SegmentoExameFisicoDto;

  @ApiPropertyOptional({ type: SegmentoExameFisicoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SegmentoExameFisicoDto)
  cardiovascular?: SegmentoExameFisicoDto;

  @ApiPropertyOptional({ type: SegmentoExameFisicoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SegmentoExameFisicoDto)
  abdomen?: SegmentoExameFisicoDto;

  @ApiPropertyOptional({ type: SegmentoExameFisicoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SegmentoExameFisicoDto)
  extremidades?: SegmentoExameFisicoDto;

  @ApiPropertyOptional({ type: SegmentoExameFisicoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SegmentoExameFisicoDto)
  neurologico?: SegmentoExameFisicoDto;

  @ApiPropertyOptional({ type: SegmentoExameFisicoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SegmentoExameFisicoDto)
  pele?: SegmentoExameFisicoDto;
}

export class ExameFisicoDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  estado_geral?: string;

  @ApiPropertyOptional({ type: SegmentarExameFisicoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SegmentarExameFisicoDto)
  segmentar?: SegmentarExameFisicoDto;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  exame_fisico_complementar?: string;
}

export class HipoteseDiagnosticaDto {
  @ApiProperty()
  @IsString()
  descricao: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cid_codigo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cid_descricao?: string;

  @ApiProperty({ enum: ['principal', 'secundaria'] })
  @IsEnum(['principal', 'secundaria'])
  tipo: string;

  @ApiProperty({ enum: ['hipotese', 'confirmado'] })
  @IsEnum(['hipotese', 'confirmado'])
  status: string;
}

export class CondutaDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  plano_terapeutico?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  orientacoes_paciente?: string;
}

export class ProcedimentoAtendimentoDto {
  @ApiProperty()
  @IsString()
  descricao_procedimento: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  codigo_procedimento?: string;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data: CreateDataInfoDto;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  observacoes?: string;
}

export class ItemPrescricaoDto {
  @ApiProperty()
  @IsString()
  nome_medicamento: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  principio_ativo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  dosagem?: string;

  @ApiProperty({ enum: VIAS_ADMINISTRACAO })
  @IsEnum(VIAS_ADMINISTRACAO)
  via_administracao: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  frequencia?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  duracao?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  quantidade?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  observacoes?: string;
}

export class PrescricoesAtendimentoDto {
  @ApiProperty({ enum: ['simples', 'especial', 'controle_especial'] })
  @IsEnum(['simples', 'especial', 'controle_especial'])
  tipo_receita: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  numero_receita?: string;

  @ApiProperty({ type: [ItemPrescricaoDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemPrescricaoDto)
  itens: ItemPrescricaoDto[];
}

export class PedidoExameDto {
  @ApiProperty({ enum: ['laboratorial', 'imagem', 'outro'] })
  @IsEnum(['laboratorial', 'imagem', 'outro'])
  tipo_exame: string;

  @ApiProperty()
  @IsString()
  descricao_exame: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  codigo_exame?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  justificativa_clinica?: string;

  @ApiProperty({ enum: ['rotina', 'urgente'] })
  @IsEnum(['rotina', 'urgente'])
  urgencia: string;

  @ApiProperty({ enum: ['solicitado', 'realizado', 'resultado_disponivel'] })
  @IsEnum(['solicitado', 'realizado', 'resultado_disponivel'])
  status: string;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_solicitacao: CreateDataInfoDto;

  @ApiPropertyOptional({ type: CreateDataInfoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_resultado?: CreateDataInfoDto;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  resultado_resumo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  arquivo_resultado_ref?: string;
}

export class AtestadoAtendimentoDto {
  @ApiProperty({
    enum: ['atestado_medico', 'declaracao_comparecimento', 'laudo', 'outro'],
  })
  @IsEnum(['atestado_medico', 'declaracao_comparecimento', 'laudo', 'outro'])
  tipo: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cid_codigo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  dias_afastamento?: number;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_emissao: CreateDataInfoDto;
}

export class DocumentoAnexadoDto {
  @ApiProperty({ enum: TIPOS_DOCUMENTO_ANEXO })
  @IsEnum(TIPOS_DOCUMENTO_ANEXO)
  tipo_documento: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiProperty()
  @IsString()
  nome_arquivo: string;

  @ApiProperty()
  @IsString()
  caminho_armazenamento: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  mime_type?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  tamanho_bytes?: number;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_upload: CreateDataInfoDto;

  @ApiProperty({ description: 'ID do profissional que fez o upload' })
  @IsMongoId()
  profissional_upload_id: string;
}

export class CreateAtendimentoDto {
  @ApiProperty({ description: 'ID do paciente' })
  @IsMongoId()
  paciente_id: string;

  @ApiProperty({ description: 'ID do profissional' })
  @IsMongoId()
  profissional_id: string;

  @ApiProperty({ description: 'ID do local de atendimento' })
  @IsMongoId()
  local_atendimento_id: string;

  @ApiPropertyOptional({ description: 'ID do agendamento vinculado' })
  @IsOptional()
  @IsMongoId()
  agendamento_id?: string;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_atendimento: CreateDataInfoDto;

  @ApiProperty({ enum: TIPOS_ATENDIMENTO })
  @IsEnum(TIPOS_ATENDIMENTO)
  tipo_atendimento: string;

  @ApiProperty({ enum: STATUS_ATENDIMENTO })
  @IsEnum(STATUS_ATENDIMENTO)
  status: string;

  @ApiProperty({ description: 'Nome do paciente (desnormalizado)' })
  @IsString()
  nome_paciente: string;

  @ApiProperty({ description: 'Nome do profissional (desnormalizado)' })
  @IsString()
  nome_profissional: string;

  @ApiPropertyOptional({ type: SinaisVitaisDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => SinaisVitaisDto)
  sinais_vitais?: SinaisVitaisDto;

  @ApiPropertyOptional({ type: ExameFisicoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => ExameFisicoDto)
  exame_fisico?: ExameFisicoDto;

  @ApiPropertyOptional({ type: [HipoteseDiagnosticaDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HipoteseDiagnosticaDto)
  hipoteses_diagnosticas?: HipoteseDiagnosticaDto[];

  @ApiPropertyOptional({ type: CondutaDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CondutaDto)
  conduta?: CondutaDto;

  @ApiPropertyOptional({ type: [ProcedimentoAtendimentoDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProcedimentoAtendimentoDto)
  procedimentos?: ProcedimentoAtendimentoDto[];

  @ApiPropertyOptional({ type: PrescricoesAtendimentoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => PrescricoesAtendimentoDto)
  prescricoes?: PrescricoesAtendimentoDto;

  @ApiPropertyOptional({ type: [PedidoExameDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PedidoExameDto)
  pedidos_exames?: PedidoExameDto[];

  @ApiPropertyOptional({ type: [AtestadoAtendimentoDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtestadoAtendimentoDto)
  atestados?: AtestadoAtendimentoDto[];

  @ApiPropertyOptional({ type: [DocumentoAnexadoDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentoAnexadoDto)
  documentos_anexados?: DocumentoAnexadoDto[];
}
