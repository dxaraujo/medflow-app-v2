import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilaEsperaController } from './fila-espera.controller';
import { FilaEsperaService } from './fila-espera.service';
import { FilaEspera, FilaEsperaSchema } from './schemas/fila-espera.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FilaEspera.name, schema: FilaEsperaSchema },
    ]),
  ],
  controllers: [FilaEsperaController],
  providers: [FilaEsperaService],
  exports: [FilaEsperaService, MongooseModule],
})
export class FilaEsperaModule {}
