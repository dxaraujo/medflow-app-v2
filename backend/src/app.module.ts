import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PacientesModule } from './modules/pacientes/pacientes.module';
import { ProfissionaisModule } from './modules/profissionais/profissionais.module';
import { LocaisAtendimentoModule } from './modules/locais-atendimento/locais-atendimento.module';
import { ConveniosModule } from './modules/convenios/convenios.module';
import { AnamnesesModule } from './modules/anamneses/anamneses.module';
import { AtendimentosModule } from './modules/atendimentos/atendimentos.module';
import { AgendamentosModule } from './modules/agendamentos/agendamentos.module';
import { FilaEsperaModule } from './modules/fila-espera/fila-espera.module';
import { LancamentosReceitaModule } from './modules/lancamentos-receita/lancamentos-receita.module';
import { ContasPagarModule } from './modules/contas-pagar/contas-pagar.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>(
          'MONGODB_URI',
          'mongodb://localhost:27017/medflow',
        ),
      }),
    }),
    PacientesModule,
    ProfissionaisModule,
    LocaisAtendimentoModule,
    ConveniosModule,
    AnamnesesModule,
    AtendimentosModule,
    AgendamentosModule,
    FilaEsperaModule,
    LancamentosReceitaModule,
    ContasPagarModule,
  ],
})
export class AppModule {}
