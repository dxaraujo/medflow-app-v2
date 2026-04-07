import { IsOptional, IsString, IsDateString, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { AppointmentType } from '../schemas/appointment.schema';

export class UpdateAppointmentDto {
  @ApiPropertyOptional({ example: '2025-01-15T08:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  dateTime?: string;

  @ApiPropertyOptional({ enum: AppointmentType })
  @IsOptional()
  @IsEnum(AppointmentType)
  type?: AppointmentType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
