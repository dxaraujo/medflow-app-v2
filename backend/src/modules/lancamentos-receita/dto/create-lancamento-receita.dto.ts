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

export class DadosConvenioReceitaDto {
  @ApiProperty({ description: 'ID do convênio' })
  @IsString()
  convenio_id: string;

  @ApiProperty({ example: 'GUIA-001' })
  @IsString()
  numero_guia: string;

  @ApiProperty({ example: 'PROC-001' })
  @IsString()
  codigo_procedimento: string;

  @ApiProperty({ example: 150.0 })
  @IsNumber()
  valor_tabela: number;

  @ApiProperty({ enum: ['pendente', 'enviado', 'pago', 'glosado'] })
  @IsEnum(['pendente', 'enviado', 'pago', 'glosado'])
  status_faturamento: string;
}

export class DadosParticularReceitaDto {
  @ApiProperty({ example: 200.0 })
  @IsNumber()
  valor_cobrado: number;

  @ApiProperty({ example: 200.0 })
  @IsNumber()
  valor_pago: number;

  @ApiPropertyOptional({ example: 0, default: 0 })
  @IsOptional()
  @IsNumber()
  desconto?: number;

  @ApiPropertyOptional({ example: 0, default: 0 })
  @IsOptional()
  @IsNumber()
  troco?: number;
}

export class CreateLancamentoReceitaDto {
  @ApiProperty({ description: 'ID do atendimento' })
  @IsString()
  atendimento_id: string;

  @ApiProperty({ description: 'ID do paciente' })
  @IsString()
  paciente_id: string;

  @ApiProperty({ description: 'ID do profissional' })
  @IsString()
  profissional_id: string;

  @ApiProperty({
    enum: ['dinheiro', 'cartao_credito', 'cartao_debito', 'pix', 'convenio'],
  })
  @IsEnum(['dinheiro', 'cartao_credito', 'cartao_debito', 'pix', 'convenio'])
  forma_pagamento: string;

  @ApiPropertyOptional({ type: DadosConvenioReceitaDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => DadosConvenioReceitaDto)
  dados_convenio?: DadosConvenioReceitaDto;

  @ApiPropertyOptional({ type: DadosParticularReceitaDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => DadosParticularReceitaDto)
  dados_particular?: DadosParticularReceitaDto;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_pagamento: CreateDataInfoDto;

  @ApiProperty({
    enum: ['pendente', 'pago', 'parcial', 'cancelado', 'estornado'],
  })
  @IsEnum(['pendente', 'pago', 'parcial', 'cancelado', 'estornado'])
  status_pagamento: string;

  @ApiProperty({ enum: ['particular', 'convenio'] })
  @IsEnum(['particular', 'convenio'])
  categoria: string;

  @ApiProperty({ example: 200.0 })
  @IsNumber()
  valor_final: number;
}
