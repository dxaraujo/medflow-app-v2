import { ApiProperty } from '@nestjs/swagger';
import { IsDateString } from 'class-validator';

export class CreateDataInfoDto {
  @ApiProperty({
    description: 'Data completa em formato ISO',
    example: '2026-04-07T10:00:00.000Z',
  })
  @IsDateString()
  data_completa: string;
}
