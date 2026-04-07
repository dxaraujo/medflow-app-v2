import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CancelAppointmentDto {
  @ApiProperty({ example: 'Paciente solicitou cancelamento' })
  @IsString()
  @IsNotEmpty({ message: 'Motivo do cancelamento é obrigatório' })
  cancelReason: string;
}
