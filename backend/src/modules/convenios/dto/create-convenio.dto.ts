import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ContatoConvenioDto {
  @ApiPropertyOptional({ example: '(11) 3000-0000' })
  @IsOptional()
  @IsString()
  telefone?: string;

  @ApiPropertyOptional({ example: 'contato@operadora.com.br' })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiPropertyOptional({ example: 'Maria Souza' })
  @IsOptional()
  @IsString()
  representante?: string;
}

export class TabelaProcedimentoDto {
  @ApiProperty({ example: '10101012' })
  @IsString()
  codigo: string;

  @ApiProperty({ example: 'Consulta em consultório' })
  @IsString()
  descricao: string;

  @ApiProperty({ example: 120.5 })
  @Type(() => Number)
  @IsNumber()
  valor: number;
}

export class CreateConvenioDto {
  @ApiProperty({ example: 'Unimed' })
  @IsString()
  nome_convenio: string;

  @ApiPropertyOptional({
    example: '123456',
    description: 'Código ANS da operadora',
  })
  @IsOptional()
  @IsString()
  codigo_ans?: string;

  @ApiPropertyOptional({ type: ContatoConvenioDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => ContatoConvenioDto)
  contato?: ContatoConvenioDto;

  @ApiPropertyOptional({ type: [TabelaProcedimentoDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TabelaProcedimentoDto)
  tabela_procedimentos?: TabelaProcedimentoDto[];

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
