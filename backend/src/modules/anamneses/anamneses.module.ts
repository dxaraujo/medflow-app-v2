import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnamnesesController } from './anamneses.controller';
import { AnamnesesService } from './anamneses.service';
import { Anamnese, AnamneseSchema } from './schemas/anamnese.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Anamnese.name, schema: AnamneseSchema },
    ]),
  ],
  controllers: [AnamnesesController],
  providers: [AnamnesesService],
  exports: [AnamnesesService, MongooseModule],
})
export class AnamnesesModule {}
