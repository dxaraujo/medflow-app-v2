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
import { CreateContatoDto } from '../../../common/dto/contato.dto';

export class RegistroProfissionalDto {
  @ApiProperty({ example: '123456' })
  @IsString()
  crm: string;

  @ApiProperty({ example: 'SP', description: 'UF do CRM' })
  @IsString()
  @Length(2, 2)
  uf_crm: string;

  @ApiPropertyOptional({ example: ['Cardiologia', 'Clínica Geral'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  especialidades?: string[];
}

export class CreateProfissionalDto {
  @ApiProperty({ example: 'Dr. Carlos Souza' })
  @IsString()
  nome_completo: string;

  @ApiProperty({ example: '98765432100', description: '11 dígitos' })
  @IsString()
  @Length(11, 11)
  @Matches(/^\d{11}$/, {
    message: 'CPF deve conter exatamente 11 dígitos numéricos',
  })
  cpf: string;

  @ApiProperty({ enum: ['medico', 'atendente'] })
  @IsEnum(['medico', 'atendente'])
  perfil: string;

  @ApiPropertyOptional({ type: RegistroProfissionalDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => RegistroProfissionalDto)
  registro_profissional?: RegistroProfissionalDto;

  @ApiProperty({ type: CreateContatoDto })
  @ValidateNested()
  @Type(() => CreateContatoDto)
  contato: CreateContatoDto;

  @ApiPropertyOptional({
    example: [],
    description: 'IDs dos locais vinculados',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  locais_vinculados?: string[];

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
