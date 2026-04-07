import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsOptional,
  IsDateString,
  IsMongoId,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AppointmentType } from '../schemas/appointment.schema';

export class CreateAppointmentDto {
  @ApiProperty({ description: 'ID do paciente' })
  @IsMongoId({ message: 'patientId deve ser um ID válido' })
  @IsNotEmpty()
  patientId: string;

  @ApiProperty({ description: 'ID do médico' })
  @IsMongoId({ message: 'doctorId deve ser um ID válido' })
  @IsNotEmpty()
  doctorId: string;

  @ApiProperty({ example: '2025-01-15T08:00:00.000Z' })
  @IsDateString({}, { message: 'Data/hora inválida' })
  @IsNotEmpty({ message: 'Data/hora é obrigatória' })
  dateTime: string;

  @ApiProperty({ enum: AppointmentType, example: AppointmentType.FIRST_VISIT })
  @IsEnum(AppointmentType, { message: 'Tipo de consulta inválido' })
  type: AppointmentType;

  @ApiPropertyOptional({ example: 'Consulta de rotina' })
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
