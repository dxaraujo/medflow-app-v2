import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {
  DataInfo,
  DataInfoSchema,
} from '../../../common/schemas/data-info.schema';

export type AgendamentoDocument = HydratedDocument<Agendamento>;

@Schema({ _id: false })
export class RecorrenciaBloqueio {
  @Prop({ type: [Number] })
  dias_semana: number[];

  @Prop({ type: String })
  hora_inicio?: string;

  @Prop({ type: String })
  hora_fim?: string;
}

export const RecorrenciaBloqueioSchema =
  SchemaFactory.createForClass(RecorrenciaBloqueio);

@Schema({ _id: false })
export class BloqueioAgendamento {
  @Prop({ type: String })
  motivo?: string;

  @Prop({
    type: String,
    required: true,
    enum: ['ferias', 'intervalo', 'indisponibilidade', 'outro'],
  })
  categoria: string;

  @Prop({ type: Boolean, required: true, default: false })
  recorrente: boolean;

  @Prop({ type: RecorrenciaBloqueioSchema })
  recorrencia?: RecorrenciaBloqueio;
}

export const BloqueioAgendamentoSchema =
  SchemaFactory.createForClass(BloqueioAgendamento);

@Schema({ _id: false })
export class TelemedicinaAgendamento {
  @Prop({ type: String, required: true })
  link_sala_virtual: string;

  @Prop({ type: String })
  plataforma?: string;
}

export const TelemedicinaAgendamentoSchema = SchemaFactory.createForClass(
  TelemedicinaAgendamento,
);

export const TIPO_AGENDAMENTO = [
  'primeira_consulta',
  'consulta',
  'retorno',
  'encaixe',
  'telemedicina',
  'bloqueio',
] as const;

export const STATUS_AGENDAMENTO = [
  'agendado',
  'confirmado',
  'em_espera',
  'em_atendimento',
  'finalizado',
  'cancelado',
  'faltou',
  'bloqueado',
] as const;

@Schema({ timestamps: true, collection: 'agendamentos' })
export class Agendamento {
  @Prop({ type: Types.ObjectId, ref: 'Profissional', required: true })
  profissional_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'LocalAtendimento', required: true })
  local_id: Types.ObjectId;

  @Prop({ type: String, required: true, enum: TIPO_AGENDAMENTO })
  tipo: string;

  @Prop({ type: Types.ObjectId, ref: 'Paciente' })
  paciente_id?: Types.ObjectId;

  @Prop({ type: DataInfoSchema, required: true })
  data_horario_inicio: DataInfo;

  @Prop({ type: DataInfoSchema })
  data_horario_fim?: DataInfo;

  @Prop({ type: Number, required: true })
  duracao_minutos: number;

  @Prop({ type: Boolean, required: true, default: false })
  duracao_personalizada: boolean;

  @Prop({ type: Number, required: true })
  duracao_padrao_tipo_minutos: number;

  @Prop({ type: BloqueioAgendamentoSchema })
  bloqueio?: BloqueioAgendamento;

  @Prop({ type: TelemedicinaAgendamentoSchema })
  telemedicina?: TelemedicinaAgendamento;

  @Prop({ type: String, required: true, enum: STATUS_AGENDAMENTO })
  status: string;

  @Prop({ type: Boolean, required: true, default: false })
  is_encaixe: boolean;

  @Prop({ type: String })
  observacoes?: string;

  @Prop({ type: String })
  nome_paciente?: string;

  @Prop({ type: String, required: true })
  nome_profissional: string;

  @Prop({ type: String })
  telefone_paciente?: string;

  @Prop({ type: String })
  convenio_nome?: string;
}

export const AgendamentoSchema = SchemaFactory.createForClass(Agendamento);

AgendamentoSchema.index({
  profissional_id: 1,
  local_id: 1,
  'data_horario_inicio.data_completa': 1,
});
AgendamentoSchema.index({
  profissional_id: 1,
  'data_horario_inicio.ano': 1,
  'data_horario_inicio.mes': 1,
});
AgendamentoSchema.index({
  tipo: 1,
  'data_horario_inicio.ano': 1,
  'data_horario_inicio.mes': 1,
});
AgendamentoSchema.index({ paciente_id: 1 }, { sparse: true });
AgendamentoSchema.index({
  status: 1,
  'data_horario_inicio.ano': 1,
  'data_horario_inicio.mes': 1,
});
AgendamentoSchema.index({
  is_encaixe: 1,
  profissional_id: 1,
  'data_horario_inicio.data_completa': 1,
});
AgendamentoSchema.index({
  profissional_id: 1,
  tipo: 1,
  'data_horario_inicio.data_completa': 1,
  'data_horario_fim.data_completa': 1,
});
