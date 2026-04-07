import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConveniosController } from './convenios.controller';
import { ConveniosService } from './convenios.service';
import { Convenio, ConvenioSchema } from './schemas/convenio.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Convenio.name, schema: ConvenioSchema },
    ]),
  ],
  controllers: [ConveniosController],
  providers: [ConveniosService],
  exports: [ConveniosService, MongooseModule],
})
export class ConveniosModule {}
