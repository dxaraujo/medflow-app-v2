import { PartialType } from '@nestjs/swagger';
import { CreateLancamentoReceitaDto } from './create-lancamento-receita.dto';

export class UpdateLancamentoReceitaDto extends PartialType(
  CreateLancamentoReceitaDto,
) {}
