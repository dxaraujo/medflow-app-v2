import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConvenioDocument = HydratedDocument<Convenio>;

@Schema({ _id: false })
export class ContatoConvenio {
  @Prop({ type: String })
  telefone?: string;

  @Prop({ type: String })
  email?: string;

  @Prop({ type: String })
  representante?: string;
}

export const ContatoConvenioSchema =
  SchemaFactory.createForClass(ContatoConvenio);

@Schema({ _id: false })
export class TabelaProcedimento {
  @Prop({ type: String, required: true })
  codigo: string;

  @Prop({ type: String, required: true })
  descricao: string;

  @Prop({ type: Number, required: true })
  valor: number;
}

export const TabelaProcedimentoSchema =
  SchemaFactory.createForClass(TabelaProcedimento);

@Schema({ timestamps: true, collection: 'convenios' })
export class Convenio {
  @Prop({ type: String, required: true })
  nome_convenio: string;

  @Prop({ type: String, unique: true, sparse: true })
  codigo_ans?: string;

  @Prop({ type: ContatoConvenioSchema })
  contato?: ContatoConvenio;

  @Prop({ type: [TabelaProcedimentoSchema], default: [] })
  tabela_procedimentos: TabelaProcedimento[];

  @Prop({ type: Boolean, required: true, default: true })
  ativo: boolean;
}

export const ConvenioSchema = SchemaFactory.createForClass(Convenio);

ConvenioSchema.index({ nome_convenio: 'text' });
ConvenioSchema.index({ 'tabela_procedimentos.codigo': 1 });
