import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {
  DataInfo,
  DataInfoSchema,
} from '../../../common/schemas/data-info.schema';

export type FilaEsperaDocument = HydratedDocument<FilaEspera>;

@Schema({ _id: false })
export class TriagemFilaEspera {
  @Prop({ type: String })
  queixa_rapida?: string;

  @Prop({ type: Number })
  pressao_arterial_sistolica?: number;

  @Prop({ type: Number })
  pressao_arterial_diastolica?: number;

  @Prop({ type: Number })
  temperatura?: number;

  @Prop({ type: Number })
  peso?: number;

  @Prop({ type: Number })
  altura?: number;
}

export const TriagemFilaEsperaSchema =
  SchemaFactory.createForClass(TriagemFilaEspera);

export const PRIORIDADE_FILA = ['normal', 'prioritario', 'urgente'] as const;
export const STATUS_FILA = [
  'aguardando',
  'em_atendimento',
  'atendido',
  'desistiu',
] as const;

@Schema({ timestamps: true, collection: 'fila_espera' })
export class FilaEspera {
  @Prop({ type: Types.ObjectId, ref: 'Paciente', required: true })
  paciente_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Agendamento' })
  agendamento_id?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Profissional', required: true })
  profissional_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'LocalAtendimento', required: true })
  local_id: Types.ObjectId;

  @Prop({ type: DataInfoSchema, required: true })
  horario_checkin: DataInfo;

  @Prop({ type: DataInfoSchema })
  horario_inicio_atendimento?: DataInfo;

  @Prop({ type: DataInfoSchema })
  horario_fim_atendimento?: DataInfo;

  @Prop({
    type: String,
    required: true,
    enum: PRIORIDADE_FILA,
    default: 'normal',
  })
  prioridade: string;

  @Prop({ type: String, required: true, enum: STATUS_FILA })
  status: string;

  @Prop({ type: Number, required: true })
  posicao_fila: number;

  @Prop({ type: TriagemFilaEsperaSchema })
  triagem?: TriagemFilaEspera;

  @Prop({ type: String, required: true })
  nome_paciente: string;

  @Prop({ type: String, required: true })
  nome_profissional: string;
}

export const FilaEsperaSchema = SchemaFactory.createForClass(FilaEspera);

FilaEsperaSchema.index({
  profissional_id: 1,
  local_id: 1,
  status: 1,
  posicao_fila: 1,
});
FilaEsperaSchema.index({
  'horario_checkin.data_completa': 1,
  status: 1,
});
FilaEsperaSchema.index(
  { 'horario_checkin.data_completa': 1 },
  { expireAfterSeconds: 172800 },
);
