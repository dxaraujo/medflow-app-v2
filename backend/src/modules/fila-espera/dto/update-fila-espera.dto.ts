import { PartialType } from '@nestjs/swagger';
import { CreateFilaEsperaDto } from './create-fila-espera.dto';

export class UpdateFilaEsperaDto extends PartialType(CreateFilaEsperaDto) {}
