import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';

export class CreateContaPagarDto {
  @ApiProperty({ example: 'Aluguel do consultório - Março' })
  @IsString()
  descricao: string;

  @ApiPropertyOptional({ example: 'Imobiliária XYZ' })
  @IsOptional()
  @IsString()
  fornecedor?: string;

  @ApiProperty({
    enum: ['aluguel', 'material', 'salario', 'servico', 'imposto', 'outro'],
  })
  @IsEnum(['aluguel', 'material', 'salario', 'servico', 'imposto', 'outro'])
  categoria_despesa: string;

  @ApiProperty({ example: 3500.0 })
  @IsNumber()
  valor: number;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_vencimento: CreateDataInfoDto;

  @ApiPropertyOptional({ type: CreateDataInfoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_pagamento?: CreateDataInfoDto;

  @ApiProperty({ enum: ['pendente', 'pago', 'vencido', 'cancelado'] })
  @IsEnum(['pendente', 'pago', 'vencido', 'cancelado'])
  status: string;

  @ApiPropertyOptional({ example: 'PIX' })
  @IsOptional()
  @IsString()
  forma_pagamento?: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  recorrente?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  observacoes?: string;

  @ApiProperty({
    example: 'despesas_fixas',
    description: 'Categoria para agregação',
  })
  @IsString()
  categoria: string;
}
