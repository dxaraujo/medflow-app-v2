import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsArray,
  ValidateNested,
  Length,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';
import { CreateContatoDto } from '../../../common/dto/contato.dto';
import { CreateEnderecoDto } from '../../../common/dto/endereco.dto';

export class ConvenioPacienteDto {
  @ApiProperty({ description: 'ID do convênio' })
  @IsString()
  convenio_id: string;

  @ApiProperty({ example: '123456789' })
  @IsString()
  numero_carteirinha: string;

  @ApiPropertyOptional({ type: CreateDataInfoDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  validade?: CreateDataInfoDto;

  @ApiPropertyOptional({ example: 'Enfermaria' })
  @IsOptional()
  @IsString()
  plano?: string;
}

export class CreatePacienteDto {
  @ApiProperty({ example: 'João da Silva' })
  @IsString()
  nome_completo: string;

  @ApiProperty({ type: CreateDataInfoDto })
  @ValidateNested()
  @Type(() => CreateDataInfoDto)
  data_nascimento: CreateDataInfoDto;

  @ApiProperty({ enum: ['masculino', 'feminino', 'intersexo'] })
  @IsEnum(['masculino', 'feminino', 'intersexo'])
  sexo: string;

  @ApiProperty({ example: '12345678901', description: '11 dígitos' })
  @IsString()
  @Length(11, 11)
  @Matches(/^\d{11}$/, {
    message: 'CPF deve conter exatamente 11 dígitos numéricos',
  })
  cpf: string;

  @ApiPropertyOptional({ example: '12.345.678-9' })
  @IsOptional()
  @IsString()
  rg?: string;

  @ApiPropertyOptional({ example: 'Maria da Silva' })
  @IsOptional()
  @IsString()
  nome_mae?: string;

  @ApiPropertyOptional({ example: 'São Paulo - SP' })
  @IsOptional()
  @IsString()
  naturalidade?: string;

  @ApiProperty({ type: CreateContatoDto })
  @ValidateNested()
  @Type(() => CreateContatoDto)
  contato: CreateContatoDto;

  @ApiProperty({ type: CreateEnderecoDto })
  @ValidateNested()
  @Type(() => CreateEnderecoDto)
  endereco: CreateEnderecoDto;

  @ApiPropertyOptional({ type: [ConvenioPacienteDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConvenioPacienteDto)
  convenios?: ConvenioPacienteDto[];

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
