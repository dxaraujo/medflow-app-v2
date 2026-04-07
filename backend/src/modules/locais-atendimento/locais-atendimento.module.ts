import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocaisAtendimentoController } from './locais-atendimento.controller';
import { LocaisAtendimentoService } from './locais-atendimento.service';
import {
  LocalAtendimento,
  LocalAtendimentoSchema,
} from './schemas/local-atendimento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LocalAtendimento.name, schema: LocalAtendimentoSchema },
    ]),
  ],
  controllers: [LocaisAtendimentoController],
  providers: [LocaisAtendimentoService],
  exports: [LocaisAtendimentoService, MongooseModule],
})
export class LocaisAtendimentoModule {}
