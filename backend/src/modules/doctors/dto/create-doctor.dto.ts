import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsArray,
  IsNumber,
  Min,
  Max,
  ArrayMinSize,
  ValidateNested,
  IsMongoId,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class WorkingHourDto {
  @ApiProperty({ example: 1, description: '0=Dom, 1=Seg, ..., 6=Sáb' })
  @IsNumber()
  @Min(0)
  @Max(6)
  dayOfWeek: number;

  @ApiProperty({ example: '08:00' })
  @IsString()
  @Matches(/^\d{2}:\d{2}$/, { message: 'Horário deve estar no formato HH:mm' })
  startTime: string;

  @ApiProperty({ example: '12:00' })
  @IsString()
  @Matches(/^\d{2}:\d{2}$/, { message: 'Horário deve estar no formato HH:mm' })
  endTime: string;
}

export class CreateDoctorDto {
  @ApiProperty({ description: 'ID do usuário vinculado' })
  @IsMongoId({ message: 'userId deve ser um ID válido' })
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 'João' })
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  firstName: string;

  @ApiProperty({ example: 'Silva' })
  @IsString()
  @IsNotEmpty({ message: 'Sobrenome é obrigatório' })
  lastName: string;

  @ApiProperty({ example: 'CRM/SP 123456' })
  @IsString()
  @IsNotEmpty({ message: 'CRM é obrigatório' })
  crm: string;

  @ApiProperty({ example: ['Cardiologia', 'Clínica Geral'] })
  @IsArray()
  @ArrayMinSize(1, { message: 'Deve ter pelo menos uma especialidade' })
  @IsString({ each: true })
  specialties: string[];

  @ApiPropertyOptional({ example: '(11) 98888-8888' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'joao@medflow.com' })
  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  email: string;

  @ApiPropertyOptional({ example: 30, minimum: 15, maximum: 120 })
  @IsOptional()
  @IsNumber()
  @Min(15, { message: 'Duração mínima: 15 minutos' })
  @Max(120, { message: 'Duração máxima: 120 minutos' })
  consultationDuration?: number;

  @ApiPropertyOptional({ type: [WorkingHourDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WorkingHourDto)
  workingHours?: WorkingHourDto[];
}
