import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';
import {
  DataInfo,
  DataInfoSchema,
} from '../../../common/schemas/data-info.schema';

export type AnamneseDocument = HydratedDocument<Anamnese>;

@Schema({ _id: false })
export class AlergiaAnamnese {
  @Prop({
    type: String,
    required: true,
    enum: ['medicamento', 'alimento', 'outro'],
  })
  tipo: string;

  @Prop({ type: String, required: true })
  substancia: string;

  @Prop({
    type: String,
    required: true,
    enum: ['leve', 'moderada', 'grave'],
  })
  gravidade: string;

  @Prop({ type: String })
  reacao?: string;
}

export const AlergiaAnamneseSchema =
  SchemaFactory.createForClass(AlergiaAnamnese);

@Schema({ _id: false })
export class TabagismoAnamnese {
  @Prop({
    type: String,
    required: true,
    enum: ['nunca', 'ex', 'atual'],
  })
  status: string;

  @Prop({ type: Number })
  quantidade_por_dia?: number;

  @Prop({ type: Number })
  tempo_anos?: number;
}

export const TabagismoAnamneseSchema =
  SchemaFactory.createForClass(TabagismoAnamnese);

@Schema({ _id: false })
export class EtilismoAnamnese {
  @Prop({
    type: String,
    required: true,
    enum: ['nunca', 'social', 'regular', 'ex'],
  })
  status: string;

  @Prop({ type: String })
  frequencia?: string;

  @Prop({ type: String })
  tipo?: string;
}

export const EtilismoAnamneseSchema =
  SchemaFactory.createForClass(EtilismoAnamnese);

@Schema({ _id: false })
export class AtividadeFisicaAnamnese {
  @Prop({ type: Boolean, required: true })
  pratica: boolean;

  @Prop({ type: String })
  tipo?: string;

  @Prop({ type: String })
  frequencia_semanal?: string;
}

export const AtividadeFisicaAnamneseSchema = SchemaFactory.createForClass(
  AtividadeFisicaAnamnese,
);

@Schema({ _id: false })
export class SonoAnamnese {
  @Prop({
    type: String,
    required: true,
    enum: ['boa', 'regular', 'ruim'],
  })
  qualidade: string;

  @Prop({ type: Number })
  horas_por_noite?: number;
}

export const SonoAnamneseSchema = SchemaFactory.createForClass(SonoAnamnese);

@Schema({ _id: false })
export class HabitosVidaAnamnese {
  @Prop({ type: TabagismoAnamneseSchema, required: true })
  tabagismo: TabagismoAnamnese;

  @Prop({ type: EtilismoAnamneseSchema, required: true })
  etilismo: EtilismoAnamnese;

  @Prop({ type: AtividadeFisicaAnamneseSchema, required: true })
  atividade_fisica: AtividadeFisicaAnamnese;

  @Prop({ type: String })
  alimentacao?: string;

  @Prop({ type: SonoAnamneseSchema, required: true })
  sono: SonoAnamnese;
}

export const HabitosVidaAnamneseSchema =
  SchemaFactory.createForClass(HabitosVidaAnamnese);

@Schema({ _id: false })
export class AntecedentesPessoaisAnamnese {
  @Prop({ type: [String], default: [] })
  doencas_previas: string[];

  @Prop({ type: [String], default: [] })
  cirurgias: string[];

  @Prop({ type: [AlergiaAnamneseSchema], default: [] })
  alergias: AlergiaAnamnese[];

  @Prop({ type: [String], default: [] })
  medicamentos_uso_continuo: string[];

  @Prop({ type: [String], default: [] })
  internacoes: string[];
}

export const AntecedentesPessoaisAnamneseSchema = SchemaFactory.createForClass(
  AntecedentesPessoaisAnamnese,
);

@Schema({ _id: false })
export class HistoriaDoencaAtualAnamnese {
  @Prop({ type: String, required: true })
  descricao: string;

  @Prop({ type: DataInfoSchema })
  data_inicio_sintomas?: DataInfo;

  @Prop({ type: String })
  localizacao?: string;

  @Prop({ type: Number, min: 0, max: 10 })
  intensidade?: number;

  @Prop({ type: String })
  fatores_melhora?: string;

  @Prop({ type: String })
  fatores_piora?: string;
}

export const HistoriaDoencaAtualAnamneseSchema = SchemaFactory.createForClass(
  HistoriaDoencaAtualAnamnese,
);

@Schema({ _id: false })
export class HistoricoAtualizacaoAnamnese {
  @Prop({ type: DataInfoSchema, required: true })
  data_alteracao: DataInfo;

  @Prop({ type: Types.ObjectId, ref: 'Profissional', required: true })
  profissional_id: Types.ObjectId;

  @Prop({ type: String, required: true })
  campo_alterado: string;

  @Prop({ type: MongooseSchema.Types.Mixed })
  valor_anterior?: unknown;

  @Prop({ type: MongooseSchema.Types.Mixed })
  valor_novo?: unknown;

  @Prop({ type: String })
  motivo?: string;
}

export const HistoricoAtualizacaoAnamneseSchema = SchemaFactory.createForClass(
  HistoricoAtualizacaoAnamnese,
);

@Schema({ _id: false })
export class CampoEspecialidadeAnamnese {
  @Prop({ type: String, required: true })
  chave: string;

  @Prop({ type: MongooseSchema.Types.Mixed })
  valor?: unknown;
}

export const CampoEspecialidadeAnamneseSchema = SchemaFactory.createForClass(
  CampoEspecialidadeAnamnese,
);

@Schema({ timestamps: true, collection: 'anamneses' })
export class Anamnese {
  @Prop({ type: Types.ObjectId, ref: 'Paciente', required: true, unique: true })
  paciente_id: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Profissional',
    required: true,
  })
  profissional_criacao_id: Types.ObjectId;

  @Prop({ type: DataInfoSchema, required: true })
  data_criacao: DataInfo;

  @Prop({ type: String, required: true })
  queixa_principal: string;

  @Prop({ type: HistoriaDoencaAtualAnamneseSchema, required: true })
  historia_doenca_atual: HistoriaDoencaAtualAnamnese;

  @Prop({ type: AntecedentesPessoaisAnamneseSchema, required: true })
  antecedentes_pessoais: AntecedentesPessoaisAnamnese;

  @Prop({ type: [String], default: [] })
  antecedentes_familiares: string[];

  @Prop({ type: HabitosVidaAnamneseSchema, required: true })
  habitos_vida: HabitosVidaAnamnese;

  @Prop({ type: [CampoEspecialidadeAnamneseSchema], default: [] })
  campos_especialidade: CampoEspecialidadeAnamnese[];

  @Prop({ type: [String], default: [] })
  cids: string[];

  @Prop({ type: [HistoricoAtualizacaoAnamneseSchema], default: [] })
  historico_atualizacoes: HistoricoAtualizacaoAnamnese[];
}

export const AnamneseSchema = SchemaFactory.createForClass(Anamnese);

AnamneseSchema.index({ cids: 1 });
AnamneseSchema.index({ 'antecedentes_pessoais.alergias.substancia': 1 });
AnamneseSchema.index({
  queixa_principal: 'text',
  'historia_doenca_atual.descricao': 'text',
});
