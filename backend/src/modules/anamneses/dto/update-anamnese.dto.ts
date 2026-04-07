import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateAnamneseDto } from './create-anamnese.dto';

export class UpdateAnamneseDto extends PartialType(
  OmitType(CreateAnamneseDto, ['paciente_id'] as const),
) {
  @ApiPropertyOptional({
    description:
      'Obrigatório quando houver alterações em campos da anamnese (auditoria)',
  })
  @IsOptional()
  @IsString()
  profissional_id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  motivo?: string;
}
