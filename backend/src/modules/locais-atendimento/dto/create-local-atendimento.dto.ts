import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsInt,
  Min,
  Max,
  IsMongoId,
  ValidateBy,
  ValidationOptions,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEnderecoDto } from '../../../common/dto/endereco.dto';

function IsDuracaoAgendaMinutos(validationOptions?: ValidationOptions) {
  return ValidateBy(
    {
      name: 'isDuracaoAgendaMinutos',
      validator: {
        validate: (value: unknown): boolean =>
          typeof value === 'number' &&
          Number.isInteger(value) &&
          value >= 5 &&
          value <= 120 &&
          value % 5 === 0,
        defaultMessage: () =>
          'deve ser um inteiro entre 5 e 120, múltiplo de 5',
      },
    },
    validationOptions,
  );
}

export class HorarioFuncionamentoDto {
  @ApiProperty({ description: 'Dia da semana (0 = domingo … 6 = sábado)' })
  @IsInt()
  @Min(0)
  @Max(6)
  dia_semana: number;

  @ApiProperty({ example: '08:00' })
  @IsString()
  hora_inicio: string;

  @ApiProperty({ example: '18:00' })
  @IsString()
  hora_fim: string;
}

export class DuracoesPorTipoDto {
  @ApiProperty({ example: 60, minimum: 5, maximum: 120 })
  @IsInt()
  @IsDuracaoAgendaMinutos()
  primeira_consulta: number;

  @ApiProperty({ example: 30, minimum: 5, maximum: 120 })
  @IsInt()
  @IsDuracaoAgendaMinutos()
  consulta: number;

  @ApiProperty({ example: 20, minimum: 5, maximum: 120 })
  @IsInt()
  @IsDuracaoAgendaMinutos()
  retorno: number;

  @ApiProperty({ example: 15, minimum: 5, maximum: 120 })
  @IsInt()
  @IsDuracaoAgendaMinutos()
  encaixe: number;

  @ApiProperty({ example: 30, minimum: 5, maximum: 120 })
  @IsInt()
  @IsDuracaoAgendaMinutos()
  telemedicina: number;
}

export class ConfiguracaoProfissionalDto {
  @ApiProperty({ description: 'ID do profissional' })
  @IsMongoId()
  profissional_id: string;

  @ApiPropertyOptional({ type: [HorarioFuncionamentoDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HorarioFuncionamentoDto)
  horarios_funcionamento?: HorarioFuncionamentoDto[];

  @ApiProperty({ type: DuracoesPorTipoDto })
  @ValidateNested()
  @Type(() => DuracoesPorTipoDto)
  duracoes_por_tipo: DuracoesPorTipoDto;
}

export class CreateLocalAtendimentoDto {
  @ApiProperty({ example: 'Clínica Saúde Total' })
  @IsString()
  nome: string;

  @ApiProperty({ type: CreateEnderecoDto })
  @ValidateNested()
  @Type(() => CreateEnderecoDto)
  endereco: CreateEnderecoDto;

  @ApiProperty({ example: '(11) 98765-4321' })
  @IsString()
  telefone: string;

  @ApiPropertyOptional({ example: '1234567' })
  @IsOptional()
  @IsString()
  cnes?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  ativo?: boolean;

  @ApiPropertyOptional({ type: [ConfiguracaoProfissionalDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConfiguracaoProfissionalDto)
  configuracoes_profissionais?: ConfiguracaoProfissionalDto[];
}
