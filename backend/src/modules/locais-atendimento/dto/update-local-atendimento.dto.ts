import { PartialType } from '@nestjs/swagger';
import { CreateLocalAtendimentoDto } from './create-local-atendimento.dto';

export class UpdateLocalAtendimentoDto extends PartialType(
  CreateLocalAtendimentoDto,
) {}
