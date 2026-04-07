import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AppointmentStatus } from '../schemas/appointment.schema';

export class UpdateStatusDto {
  @ApiProperty({ enum: AppointmentStatus })
  @IsEnum(AppointmentStatus, { message: 'Status inválido' })
  status: AppointmentStatus;
}
