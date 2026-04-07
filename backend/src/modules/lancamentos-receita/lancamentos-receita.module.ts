import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LancamentosReceitaController } from './lancamentos-receita.controller';
import { LancamentosReceitaService } from './lancamentos-receita.service';
import {
  LancamentoReceita,
  LancamentoReceitaSchema,
} from './schemas/lancamento-receita.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LancamentoReceita.name, schema: LancamentoReceitaSchema },
    ]),
  ],
  controllers: [LancamentosReceitaController],
  providers: [LancamentosReceitaService],
  exports: [LancamentosReceitaService, MongooseModule],
})
export class LancamentosReceitaModule {}
