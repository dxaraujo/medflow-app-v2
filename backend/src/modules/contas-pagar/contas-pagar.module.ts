import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContasPagarController } from './contas-pagar.controller';
import { ContasPagarService } from './contas-pagar.service';
import { ContaPagar, ContaPagarSchema } from './schemas/conta-pagar.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ContaPagar.name, schema: ContaPagarSchema },
    ]),
  ],
  controllers: [ContasPagarController],
  providers: [ContasPagarService],
  exports: [ContasPagarService, MongooseModule],
})
export class ContasPagarModule {}
