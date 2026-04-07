import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';

export class TriagemDto {
  @ApiPropertyOptional({ example: 'Dor de cabeça forte' })
  @IsOptional()
  @IsString()
  queixa_rapida?: string;

  @ApiPropertyOptional({ example: 120 })
  @IsOptional()
  @IsNumber()
  pressao_arterial_sistolica?: number;

  @ApiPropertyOptional({ example: 80 })
  @IsOptional()
  @IsNumber()
  pressao_arterial_diastolica?: number;

  @ApiPropertyOptional({ example: 36.5 })
  @IsOptional()
  @IsNumber()
  temperatura?: number;

  @ApiPropertyOptional({ example: 75 })
  @IsOptional()
  @IsNumber()
  peso?: number;

  @ApiPropertyOptional({ example: 170 })
  @IsOptional()
  @IsNumber()
  altura?: number;
}

export class CreateFilaEsperaDto {
  @ApiProperty({ description: 'ID do paciente' })
  @IsString()
  paciente_id: string;

  @ApiPropertyOptional({ description: 'ID do agendamento' })
  @IsOptional()
  @IsString()
  agendamento_id?: string;

  @ApiProperty({ description: 'ID do profissional' })
  @IsString()
  profissional_id: string;

  @ApiProperty({ description: 'ID do local de atendimento' })
  @IsString()
  local_id: string;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  horario_checkin: CreateDataInfoDto;

  @ApiProperty({
    enum: ['normal', 'prioritario', 'urgente'],
    default: 'normal',
  })
  @IsEnum(['normal', 'prioritario', 'urgente'])
  prioridade: string;

  @ApiProperty({
    enum: ['aguardando', 'em_atendimento', 'atendido', 'desistiu'],
    default: 'aguardando',
  })
  @IsEnum(['aguardando', 'em_atendimento', 'atendido', 'desistiu'])
  status: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  posicao_fila: number;

  @ApiPropertyOptional({ type: TriagemDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => TriagemDto)
  triagem?: TriagemDto;

  @ApiProperty({ example: 'João da Silva' })
  @IsString()
  nome_paciente: string;

  @ApiProperty({ example: 'Dr. Carlos Souza' })
  @IsString()
  nome_profissional: string;
}
