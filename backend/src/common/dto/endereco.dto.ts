import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, Length, Matches } from 'class-validator';

export class CreateEnderecoDto {
  @ApiProperty({ example: 'Rua das Flores' })
  @IsString()
  logradouro: string;

  @ApiProperty({ example: '123' })
  @IsString()
  numero: string;

  @ApiPropertyOptional({ example: 'Sala 201' })
  @IsOptional()
  @IsString()
  complemento?: string;

  @ApiProperty({ example: 'Centro' })
  @IsString()
  bairro: string;

  @ApiProperty({ example: 'São Paulo' })
  @IsString()
  cidade: string;

  @ApiProperty({ example: 'SP', description: 'UF com 2 caracteres' })
  @IsString()
  @Length(2, 2)
  estado: string;

  @ApiProperty({ example: '01001-000', description: 'Formato 00000-000' })
  @IsString()
  @Matches(/^\d{5}-\d{3}$/, { message: 'CEP deve estar no formato 00000-000' })
  cep: string;

  @ApiPropertyOptional({ example: 'Brasil', default: 'Brasil' })
  @IsOptional()
  @IsString()
  pais?: string;
}
