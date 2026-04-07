import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {
  DataInfo,
  DataInfoSchema,
} from '../../../common/schemas/data-info.schema';

export type LancamentoReceitaDocument = HydratedDocument<LancamentoReceita>;

@Schema({ _id: false })
export class DadosConvenioReceita {
  @Prop({ type: Types.ObjectId, ref: 'Convenio', required: true })
  convenio_id: Types.ObjectId;

  @Prop({ type: String, required: true })
  numero_guia: string;

  @Prop({ type: String, required: true })
  codigo_procedimento: string;

  @Prop({ type: Number, required: true })
  valor_tabela: number;

  @Prop({
    type: String,
    required: true,
    enum: ['pendente', 'enviado', 'pago', 'glosado'],
  })
  status_faturamento: string;
}

export const DadosConvenioReceitaSchema =
  SchemaFactory.createForClass(DadosConvenioReceita);

@Schema({ _id: false })
export class DadosParticularReceita {
  @Prop({ type: Number, required: true })
  valor_cobrado: number;

  @Prop({ type: Number, required: true })
  valor_pago: number;

  @Prop({ type: Number, default: 0 })
  desconto: number;

  @Prop({ type: Number, default: 0 })
  troco: number;
}

export const DadosParticularReceitaSchema = SchemaFactory.createForClass(
  DadosParticularReceita,
);

export const FORMA_PAGAMENTO = [
  'dinheiro',
  'cartao_credito',
  'cartao_debito',
  'pix',
  'convenio',
] as const;

export const STATUS_PAGAMENTO = [
  'pendente',
  'pago',
  'parcial',
  'cancelado',
  'estornado',
] as const;

@Schema({ timestamps: true, collection: 'lancamentos_receita' })
export class LancamentoReceita {
  @Prop({ type: Types.ObjectId, ref: 'Atendimento', required: true })
  atendimento_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Paciente', required: true })
  paciente_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Profissional', required: true })
  profissional_id: Types.ObjectId;

  @Prop({ type: String, required: true, enum: FORMA_PAGAMENTO })
  forma_pagamento: string;

  @Prop({ type: DadosConvenioReceitaSchema })
  dados_convenio?: DadosConvenioReceita;

  @Prop({ type: DadosParticularReceitaSchema })
  dados_particular?: DadosParticularReceita;

  @Prop({ type: DataInfoSchema, required: true })
  data_pagamento: DataInfo;

  @Prop({ type: String, required: true, enum: STATUS_PAGAMENTO })
  status_pagamento: string;

  @Prop({ type: String, required: true, default: 'receita' })
  tipo: string;

  @Prop({ type: String, required: true, enum: ['particular', 'convenio'] })
  categoria: string;

  @Prop({ type: Number, required: true })
  valor_final: number;
}

export const LancamentoReceitaSchema =
  SchemaFactory.createForClass(LancamentoReceita);

LancamentoReceitaSchema.index({ atendimento_id: 1 });
LancamentoReceitaSchema.index({
  'data_pagamento.ano': 1,
  'data_pagamento.mes': 1,
  categoria: 1,
});
LancamentoReceitaSchema.index({
  'dados_convenio.convenio_id': 1,
  'dados_convenio.status_faturamento': 1,
});
LancamentoReceitaSchema.index({ status_pagamento: 1 });
LancamentoReceitaSchema.index({
  profissional_id: 1,
  'data_pagamento.ano': 1,
  'data_pagamento.mes': 1,
});
LancamentoReceitaSchema.index({
  'data_pagamento.ano': 1,
  'data_pagamento.trimestre': 1,
  tipo: 1,
});
