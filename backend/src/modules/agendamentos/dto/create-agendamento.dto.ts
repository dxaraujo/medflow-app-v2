import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsNumber,
  IsInt,
  Min,
  Max,
  ValidateNested,
  ValidateIf,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';

export class RecorrenciaBloqueioDto {
  @ApiPropertyOptional({ example: [1, 2, 3, 4, 5] })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  dias_semana?: number[];

  @ApiPropertyOptional({ example: '12:00' })
  @IsOptional()
  @IsString()
  hora_inicio?: string;

  @ApiPropertyOptional({ example: '13:00' })
  @IsOptional()
  @IsString()
  hora_fim?: string;
}

export class BloqueioAgendamentoDto {
  @ApiPropertyOptional({ example: 'Férias de julho' })
  @IsOptional()
  @IsString()
  motivo?: string;

  @ApiProperty({ enum: ['ferias', 'intervalo', 'indisponibilidade', 'outro'] })
  @IsEnum(['ferias', 'intervalo', 'indisponibilidade', 'outro'])
  categoria: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  recorrente: boolean;

  @ApiPropertyOptional({ type: RecorrenciaBloqueioDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => RecorrenciaBloqueioDto)
  recorrencia?: RecorrenciaBloqueioDto;
}

export class TelemedicinaAgendamentoDto {
  @ApiProperty({ example: 'https://meet.example.com/sala123' })
  @IsString()
  link_sala_virtual: string;

  @ApiPropertyOptional({ example: 'Google Meet' })
  @IsOptional()
  @IsString()
  plataforma?: string;
}

const TIPOS = [
  'primeira_consulta',
  'consulta',
  'retorno',
  'encaixe',
  'telemedicina',
  'bloqueio',
] as const;

const STATUS_LIST = [
  'agendado',
  'confirmado',
  'em_espera',
  'em_atendimento',
  'finalizado',
  'cancelado',
  'faltou',
  'bloqueado',
] as const;

export class CreateAgendamentoDto {
  @ApiProperty({ description: 'ID do profissional' })
  @IsString()
  profissional_id: string;

  @ApiProperty({ description: 'ID do local de atendimento' })
  @IsString()
  local_atendimento_id: string;

  @ApiProperty({ enum: TIPOS })
  @IsEnum(TIPOS)
  tipo: string;

  @ApiPropertyOptional({
    description: 'ID do paciente (obrigatório exceto para bloqueio)',
  })
  @ValidateIf((o: CreateAgendamentoDto) => o.tipo !== 'bloqueio')
  @IsString()
  paciente_id?: string;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_horario_inicio: CreateDataInfoDto;

  @ApiPropertyOptional({ type: CreateDataInfoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_horario_fim?: CreateDataInfoDto;

  @ApiProperty({ example: 30, description: 'Múltiplo de 5, entre 5 e 120' })
  @IsInt()
  @Min(5)
  @Max(120)
  duracao_minutos: number;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  duracao_personalizada?: boolean;

  @ApiProperty({ example: 30 })
  @IsInt()
  @Min(5)
  @Max(120)
  duracao_padrao_tipo_minutos: number;

  @ApiPropertyOptional({ type: BloqueioAgendamentoDto })
  @ValidateIf((o: CreateAgendamentoDto) => o.tipo === 'bloqueio')
  @ValidateNested()
  @Type(() => BloqueioAgendamentoDto)
  bloqueio?: BloqueioAgendamentoDto;

  @ApiPropertyOptional({ type: TelemedicinaAgendamentoDto })
  @ValidateIf((o: CreateAgendamentoDto) => o.tipo === 'telemedicina')
  @ValidateNested()
  @Type(() => TelemedicinaAgendamentoDto)
  telemedicina?: TelemedicinaAgendamentoDto;

  @ApiProperty({ enum: STATUS_LIST, default: 'agendado' })
  @IsEnum(STATUS_LIST)
  status: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  is_encaixe?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  observacoes?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nome_paciente?: string;

  @ApiProperty({ example: 'Dr. Carlos Souza' })
  @IsString()
  nome_profissional: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  telefone_paciente?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  convenio_nome?: string;
}
