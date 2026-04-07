import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  DataInfo,
  DataInfoSchema,
} from '../../../common/schemas/data-info.schema';

export type ContaPagarDocument = HydratedDocument<ContaPagar>;

export const CATEGORIA_DESPESA = [
  'aluguel',
  'material',
  'salario',
  'servico',
  'imposto',
  'outro',
] as const;

export const STATUS_CONTA = [
  'pendente',
  'pago',
  'vencido',
  'cancelado',
] as const;

@Schema({ timestamps: true, collection: 'contas_pagar' })
export class ContaPagar {
  @Prop({ type: String, required: true })
  descricao: string;

  @Prop({ type: String })
  fornecedor?: string;

  @Prop({ type: String, required: true, enum: CATEGORIA_DESPESA })
  categoria_despesa: string;

  @Prop({ type: Number, required: true })
  valor: number;

  @Prop({ type: DataInfoSchema, required: true })
  data_vencimento: DataInfo;

  @Prop({ type: DataInfoSchema })
  data_pagamento?: DataInfo;

  @Prop({ type: String, required: true, enum: STATUS_CONTA })
  status: string;

  @Prop({ type: String })
  forma_pagamento?: string;

  @Prop({ type: Boolean, required: true, default: false })
  recorrente: boolean;

  @Prop({ type: String })
  observacoes?: string;

  @Prop({ type: String, required: true, default: 'despesa' })
  tipo: string;

  @Prop({ type: String, required: true })
  categoria: string;
}

export const ContaPagarSchema = SchemaFactory.createForClass(ContaPagar);

ContaPagarSchema.index({ status: 1, 'data_vencimento.data_completa': 1 });
ContaPagarSchema.index({ 'data_vencimento.ano': 1, 'data_vencimento.mes': 1 });
ContaPagarSchema.index({
  categoria_despesa: 1,
  'data_vencimento.ano': 1,
  'data_vencimento.mes': 1,
});
ContaPagarSchema.index({
  'data_vencimento.ano': 1,
  'data_vencimento.trimestre': 1,
  tipo: 1,
});
