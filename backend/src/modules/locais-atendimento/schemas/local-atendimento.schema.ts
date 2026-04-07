import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Endereco, EnderecoSchema } from '../../../common/schemas/endereco.schema';

export type LocalAtendimentoDocument = HydratedDocument<LocalAtendimento>;

@Schema({ _id: false })
export class HorarioFuncionamento {
  @Prop({ type: Number, required: true, min: 0, max: 6 })
  dia_semana: number;

  @Prop({ type: String, required: true })
  hora_inicio: string;

  @Prop({ type: String, required: true })
  hora_fim: string;
}

export const HorarioFuncionamentoSchema =
  SchemaFactory.createForClass(HorarioFuncionamento);

@Schema({ _id: false })
export class DuracoesPorTipo {
  @Prop({ type: Number, required: true, min: 5, max: 120 })
  primeira_consulta: number;

  @Prop({ type: Number, required: true, min: 5, max: 120 })
  consulta: number;

  @Prop({ type: Number, required: true, min: 5, max: 120 })
  retorno: number;

  @Prop({ type: Number, required: true, min: 5, max: 120 })
  encaixe: number;

  @Prop({ type: Number, required: true, min: 5, max: 120 })
  telemedicina: number;
}

export const DuracoesPorTipoSchema =
  SchemaFactory.createForClass(DuracoesPorTipo);

@Schema({ _id: false })
export class ConfiguracaoProfissional {
  @Prop({ type: Types.ObjectId, ref: 'Profissional', required: true })
  profissional_id: Types.ObjectId;

  @Prop({ type: [HorarioFuncionamentoSchema], default: [] })
  horarios_funcionamento: HorarioFuncionamento[];

  @Prop({ type: DuracoesPorTipoSchema, required: true })
  duracoes_por_tipo: DuracoesPorTipo;
}

export const ConfiguracaoProfissionalSchema =
  SchemaFactory.createForClass(ConfiguracaoProfissional);

@Schema({ timestamps: true, collection: 'locais_atendimento' })
export class LocalAtendimento {
  @Prop({ type: String, required: true })
  nome: string;

  @Prop({ type: EnderecoSchema, required: true })
  endereco: Endereco;

  @Prop({ type: String, required: true })
  telefone: string;

  @Prop({ type: String })
  cnes?: string;

  @Prop({ type: Boolean, required: true, default: true })
  ativo: boolean;

  @Prop({ type: [ConfiguracaoProfissionalSchema], default: [] })
  configuracoes_profissionais: ConfiguracaoProfissional[];
}

export const LocalAtendimentoSchema =
  SchemaFactory.createForClass(LocalAtendimento);

LocalAtendimentoSchema.index({ nome: 'text' });
LocalAtendimentoSchema.index({ ativo: 1 });
LocalAtendimentoSchema.index({
  'configuracoes_profissionais.profissional_id': 1,
});
