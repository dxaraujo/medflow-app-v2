import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ContatoEmergenciaDto {
  @ApiProperty({ example: 'Maria Silva' })
  @IsString()
  nome: string;

  @ApiPropertyOptional({ example: 'Mãe' })
  @IsOptional()
  @IsString()
  parentesco?: string;

  @ApiProperty({ example: '(11) 99999-0000' })
  @IsString()
  telefone: string;
}

export class CreateContatoDto {
  @ApiProperty({ example: '(11) 99999-1234', description: 'Telefone com DDD' })
  @IsString()
  telefone_principal: string;

  @ApiPropertyOptional({ example: '(11) 98888-5678' })
  @IsOptional()
  @IsString()
  telefone_secundario?: string;

  @ApiPropertyOptional({ example: 'paciente@email.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ type: ContatoEmergenciaDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => ContatoEmergenciaDto)
  contato_emergencia?: ContatoEmergenciaDto;
}
