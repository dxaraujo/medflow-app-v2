import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';

export class AlergiaAnamneseDto {
  @ApiProperty({ enum: ['medicamento', 'alimento', 'outro'] })
  @IsEnum(['medicamento', 'alimento', 'outro'])
  tipo: string;

  @ApiProperty({ example: 'Penicilina' })
  @IsString()
  substancia: string;

  @ApiProperty({ enum: ['leve', 'moderada', 'grave'] })
  @IsEnum(['leve', 'moderada', 'grave'])
  gravidade: string;

  @ApiPropertyOptional({ example: 'Urticária' })
  @IsOptional()
  @IsString()
  reacao?: string;
}

export class TabagismoAnamneseDto {
  @ApiProperty({ enum: ['nunca', 'ex', 'atual'] })
  @IsEnum(['nunca', 'ex', 'atual'])
  status: string;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsNumber()
  quantidade_por_dia?: number;

  @ApiPropertyOptional({ example: 5 })
  @IsOptional()
  @IsNumber()
  tempo_anos?: number;
}

export class EtilismoAnamneseDto {
  @ApiProperty({ enum: ['nunca', 'social', 'regular', 'ex'] })
  @IsEnum(['nunca', 'social', 'regular', 'ex'])
  status: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  frequencia?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tipo?: string;
}

export class AtividadeFisicaAnamneseDto {
  @ApiProperty()
  @IsBoolean()
  pratica: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  tipo?: string;

  @ApiPropertyOptional({ example: '3x por semana' })
  @IsOptional()
  @IsString()
  frequencia_semanal?: string;
}

export class SonoAnamneseDto {
  @ApiProperty({ enum: ['boa', 'regular', 'ruim'] })
  @IsEnum(['boa', 'regular', 'ruim'])
  qualidade: string;

  @ApiPropertyOptional({ example: 7 })
  @IsOptional()
  @IsNumber()
  horas_por_noite?: number;
}

export class HabitosVidaAnamneseDto {
  @ApiProperty({ type: TabagismoAnamneseDto })
  @ValidateNested()
  @Type(() => TabagismoAnamneseDto)
  tabagismo: TabagismoAnamneseDto;

  @ApiProperty({ type: EtilismoAnamneseDto })
  @ValidateNested()
  @Type(() => EtilismoAnamneseDto)
  etilismo: EtilismoAnamneseDto;

  @ApiProperty({ type: AtividadeFisicaAnamneseDto })
  @ValidateNested()
  @Type(() => AtividadeFisicaAnamneseDto)
  atividade_fisica: AtividadeFisicaAnamneseDto;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  alimentacao?: string;

  @ApiProperty({ type: SonoAnamneseDto })
  @ValidateNested()
  @Type(() => SonoAnamneseDto)
  sono: SonoAnamneseDto;
}

export class AntecedentesPessoaisAnamneseDto {
  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  doencas_previas?: string[];

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  cirurgias?: string[];

  @ApiPropertyOptional({ type: [AlergiaAnamneseDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AlergiaAnamneseDto)
  alergias?: AlergiaAnamneseDto[];

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  medicamentos_uso_continuo?: string[];

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  internacoes?: string[];
}

export class HistoriaDoencaAtualAnamneseDto {
  @ApiProperty()
  @IsString()
  descricao: string;

  @ApiPropertyOptional({ type: CreateDataInfoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_inicio_sintomas?: CreateDataInfoDto;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  localizacao?: string;

  @ApiPropertyOptional({ minimum: 0, maximum: 10 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  intensidade?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  fatores_melhora?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  fatores_piora?: string;
}

export class CampoEspecialidadeAnamneseDto {
  @ApiProperty()
  @IsString()
  chave: string;

  @ApiPropertyOptional({ description: 'Valor flexível por especialidade' })
  @IsOptional()
  valor?: unknown;
}

export class CreateAnamneseDto {
  @ApiProperty({ description: 'ID do paciente' })
  @IsString()
  paciente_id: string;

  @ApiProperty({ description: 'ID do profissional que criou o registro' })
  @IsString()
  profissional_criacao_id: string;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_criacao: CreateDataInfoDto;

  @ApiProperty()
  @IsString()
  queixa_principal: string;

  @ApiProperty({ type: HistoriaDoencaAtualAnamneseDto })
  @ValidateNested()
  @Type(() => HistoriaDoencaAtualAnamneseDto)
  historia_doenca_atual: HistoriaDoencaAtualAnamneseDto;

  @ApiProperty({ type: AntecedentesPessoaisAnamneseDto })
  @ValidateNested()
  @Type(() => AntecedentesPessoaisAnamneseDto)
  antecedentes_pessoais: AntecedentesPessoaisAnamneseDto;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  antecedentes_familiares?: string[];

  @ApiProperty({ type: HabitosVidaAnamneseDto })
  @ValidateNested()
  @Type(() => HabitosVidaAnamneseDto)
  habitos_vida: HabitosVidaAnamneseDto;

  @ApiPropertyOptional({ type: [CampoEspecialidadeAnamneseDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CampoEspecialidadeAnamneseDto)
  campos_especialidade?: CampoEspecialidadeAnamneseDto[];

  @ApiPropertyOptional({
    description: 'Códigos CID para indexação',
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  cids?: string[];
}
