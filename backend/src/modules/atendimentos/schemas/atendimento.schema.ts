import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { DataInfo, DataInfoSchema } from '../../../common/schemas/data-info.schema';

export type AtendimentoDocument = HydratedDocument<Atendimento>;

export const TIPOS_ATENDIMENTO = [
  'primeira_consulta',
  'consulta',
  'retorno',
  'encaixe',
  'telemedicina',
] as const;
export type TipoAtendimento = (typeof TIPOS_ATENDIMENTO)[number];

export const STATUS_ATENDIMENTO = ['em_andamento', 'finalizado', 'cancelado'] as const;
export type StatusAtendimento = (typeof STATUS_ATENDIMENTO)[number];

@Schema({ _id: false })
export class SinaisVitais {
  @Prop({ type: Number })
  pressao_arterial_sistolica?: number;

  @Prop({ type: Number })
  pressao_arterial_diastolica?: number;

  @Prop({ type: Number })
  frequencia_cardiaca?: number;

  @Prop({ type: Number })
  frequencia_respiratoria?: number;

  @Prop({ type: Number })
  temperatura?: number;

  @Prop({ type: Number })
  saturacao_o2?: number;

  @Prop({ type: Number })
  peso?: number;

  @Prop({ type: Number })
  altura?: number;

  @Prop({ type: Number })
  imc?: number;

  @Prop({ type: Number })
  glicemia_capilar?: number;

  @Prop({ type: String })
  observacoes_vitais?: string;
}

export const SinaisVitaisSchema = SchemaFactory.createForClass(SinaisVitais);

@Schema({ _id: false })
export class SegmentoExameFisico {
  @Prop({ type: Boolean, required: true })
  normal: boolean;

  @Prop({ type: String, default: '' })
  descricao: string;
}

export const SegmentoExameFisicoSchema =
  SchemaFactory.createForClass(SegmentoExameFisico);

@Schema({ _id: false })
export class SegmentarExameFisico {
  @Prop({ type: SegmentoExameFisicoSchema })
  cabeca_pescoco?: SegmentoExameFisico;

  @Prop({ type: SegmentoExameFisicoSchema })
  torax_pulmoes?: SegmentoExameFisico;

  @Prop({ type: SegmentoExameFisicoSchema })
  cardiovascular?: SegmentoExameFisico;

  @Prop({ type: SegmentoExameFisicoSchema })
  abdomen?: SegmentoExameFisico;

  @Prop({ type: SegmentoExameFisicoSchema })
  extremidades?: SegmentoExameFisico;

  @Prop({ type: SegmentoExameFisicoSchema })
  neurologico?: SegmentoExameFisico;

  @Prop({ type: SegmentoExameFisicoSchema })
  pele?: SegmentoExameFisico;
}

export const SegmentarExameFisicoSchema =
  SchemaFactory.createForClass(SegmentarExameFisico);

@Schema({ _id: false })
export class ExameFisico {
  @Prop({ type: String })
  estado_geral?: string;

  @Prop({ type: SegmentarExameFisicoSchema })
  segmentar?: SegmentarExameFisico;

  @Prop({ type: String })
  exame_fisico_complementar?: string;
}

export const ExameFisicoSchema = SchemaFactory.createForClass(ExameFisico);

@Schema({ _id: false })
export class HipoteseDiagnostica {
  @Prop({ type: String, required: true })
  descricao: string;

  @Prop({ type: String })
  cid_codigo?: string;

  @Prop({ type: String })
  cid_descricao?: string;

  @Prop({ type: String, required: true, enum: ['principal', 'secundaria'] })
  tipo: string;

  @Prop({ type: String, required: true, enum: ['hipotese', 'confirmado'] })
  status: string;
}

export const HipoteseDiagnosticaSchema =
  SchemaFactory.createForClass(HipoteseDiagnostica);

@Schema({ _id: false })
export class Conduta {
  @Prop({ type: String })
  plano_terapeutico?: string;

  @Prop({ type: String })
  orientacoes_paciente?: string;
}

export const CondutaSchema = SchemaFactory.createForClass(Conduta);

@Schema({ _id: false })
export class ProcedimentoAtendimento {
  @Prop({ type: String, required: true })
  descricao_procedimento: string;

  @Prop({ type: String })
  codigo_procedimento?: string;

  @Prop({ type: DataInfoSchema, required: true })
  data: DataInfo;

  @Prop({ type: String })
  observacoes?: string;
}

export const ProcedimentoAtendimentoSchema =
  SchemaFactory.createForClass(ProcedimentoAtendimento);

export const VIAS_ADMINISTRACAO = [
  'oral',
  'intravenosa',
  'intramuscular',
  'subcutanea',
  'topica',
  'inalatoria',
  'oftalmica',
  'otologica',
  'nasal',
  'retal',
  'outro',
] as const;

@Schema({ _id: false })
export class ItemPrescricao {
  @Prop({ type: String, required: true })
  nome_medicamento: string;

  @Prop({ type: String })
  principio_ativo?: string;

  @Prop({ type: String })
  dosagem?: string;

  @Prop({ type: String, required: true, enum: [...VIAS_ADMINISTRACAO] })
  via_administracao: string;

  @Prop({ type: String })
  frequencia?: string;

  @Prop({ type: String })
  duracao?: string;

  @Prop({ type: String })
  quantidade?: string;

  @Prop({ type: String })
  observacoes?: string;
}

export const ItemPrescricaoSchema = SchemaFactory.createForClass(ItemPrescricao);

@Schema({ _id: false })
export class PrescricoesAtendimento {
  @Prop({ type: String, required: true, enum: ['simples', 'especial', 'controle_especial'] })
  tipo_receita: string;

  @Prop({ type: String })
  numero_receita?: string;

  @Prop({ type: [ItemPrescricaoSchema], default: [] })
  itens: ItemPrescricao[];
}

export const PrescricoesAtendimentoSchema =
  SchemaFactory.createForClass(PrescricoesAtendimento);

@Schema({ _id: false })
export class PedidoExame {
  @Prop({ type: String, required: true, enum: ['laboratorial', 'imagem', 'outro'] })
  tipo_exame: string;

  @Prop({ type: String, required: true })
  descricao_exame: string;

  @Prop({ type: String })
  codigo_exame?: string;

  @Prop({ type: String })
  justificativa_clinica?: string;

  @Prop({ type: String, required: true, enum: ['rotina', 'urgente'] })
  urgencia: string;

  @Prop({
    type: String,
    required: true,
    enum: ['solicitado', 'realizado', 'resultado_disponivel'],
  })
  status: string;

  @Prop({ type: DataInfoSchema, required: true })
  data_solicitacao: DataInfo;

  @Prop({ type: DataInfoSchema })
  data_resultado?: DataInfo;

  @Prop({ type: String })
  resultado_resumo?: string;

  @Prop({ type: String })
  arquivo_resultado_ref?: string;
}

export const PedidoExameSchema = SchemaFactory.createForClass(PedidoExame);

@Schema({ _id: false })
export class AtestadoAtendimento {
  @Prop({
    type: String,
    required: true,
    enum: ['atestado_medico', 'declaracao_comparecimento', 'laudo', 'outro'],
  })
  tipo: string;

  @Prop({ type: String })
  descricao?: string;

  @Prop({ type: String })
  cid_codigo?: string;

  @Prop({ type: Number })
  dias_afastamento?: number;

  @Prop({ type: DataInfoSchema, required: true })
  data_emissao: DataInfo;
}

export const AtestadoAtendimentoSchema =
  SchemaFactory.createForClass(AtestadoAtendimento);

export const TIPOS_DOCUMENTO_ANEXO = [
  'exame',
  'laudo',
  'imagem',
  'receita',
  'atestado',
  'consentimento',
  'outro',
] as const;

@Schema({ _id: false })
export class DocumentoAnexado {
  @Prop({ type: String, required: true, enum: [...TIPOS_DOCUMENTO_ANEXO] })
  tipo_documento: string;

  @Prop({ type: String })
  descricao?: string;

  @Prop({ type: String, required: true })
  nome_arquivo: string;

  @Prop({ type: String, required: true })
  caminho_armazenamento: string;

  @Prop({ type: String })
  mime_type?: string;

  @Prop({ type: Number })
  tamanho_bytes?: number;

  @Prop({ type: DataInfoSchema, required: true })
  data_upload: DataInfo;

  @Prop({ type: Types.ObjectId, ref: 'Profissional', required: true })
  profissional_upload_id: Types.ObjectId;
}

export const DocumentoAnexadoSchema = SchemaFactory.createForClass(DocumentoAnexado);

@Schema({ timestamps: true, collection: 'atendimentos' })
export class Atendimento {
  @Prop({ type: Types.ObjectId, ref: 'Paciente', required: true })
  paciente_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Profissional', required: true })
  profissional_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'LocalAtendimento', required: true })
  local_atendimento_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Agendamento' })
  agendamento_id?: Types.ObjectId;

  @Prop({ type: DataInfoSchema, required: true })
  data_atendimento: DataInfo;

  @Prop({ type: String, required: true, enum: [...TIPOS_ATENDIMENTO] })
  tipo_atendimento: TipoAtendimento;

  @Prop({ type: String, required: true, enum: [...STATUS_ATENDIMENTO] })
  status: StatusAtendimento;

  @Prop({ type: String, required: true })
  nome_paciente: string;

  @Prop({ type: String, required: true })
  nome_profissional: string;

  @Prop({ type: SinaisVitaisSchema })
  sinais_vitais?: SinaisVitais;

  @Prop({ type: ExameFisicoSchema })
  exame_fisico?: ExameFisico;

  @Prop({ type: [HipoteseDiagnosticaSchema], default: [] })
  hipoteses_diagnosticas: HipoteseDiagnostica[];

  @Prop({ type: CondutaSchema })
  conduta?: Conduta;

  @Prop({ type: [ProcedimentoAtendimentoSchema], default: [] })
  procedimentos: ProcedimentoAtendimento[];

  @Prop({ type: PrescricoesAtendimentoSchema })
  prescricoes?: PrescricoesAtendimento;

  @Prop({ type: [PedidoExameSchema], default: [] })
  pedidos_exames: PedidoExame[];

  @Prop({ type: [AtestadoAtendimentoSchema], default: [] })
  atestados: AtestadoAtendimento[];

  @Prop({ type: [DocumentoAnexadoSchema], default: [] })
  documentos_anexados: DocumentoAnexado[];
}

export const AtendimentoSchema = SchemaFactory.createForClass(Atendimento);

AtendimentoSchema.index({ paciente_id: 1, data_atendimento: 1 });
AtendimentoSchema.index({ profissional_id: 1, data_atendimento: 1 });
AtendimentoSchema.index({ 'hipoteses_diagnosticas.cid_codigo': 1 });
AtendimentoSchema.index({ status: 1 });
AtendimentoSchema.index({ agendamento_id: 1 });
