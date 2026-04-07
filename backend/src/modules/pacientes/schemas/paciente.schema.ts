import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {
  DataInfo,
  DataInfoSchema,
} from '../../../common/schemas/data-info.schema';
import { Contato, ContatoSchema } from '../../../common/schemas/contato.schema';
import {
  Endereco,
  EnderecoSchema,
} from '../../../common/schemas/endereco.schema';

export type PacienteDocument = HydratedDocument<Paciente>;

@Schema({ _id: false })
export class ConvenioPaciente {
  @Prop({ type: Types.ObjectId, ref: 'Convenio', required: true })
  convenio_id: Types.ObjectId;

  @Prop({ type: String, required: true })
  numero_carteirinha: string;

  @Prop({ type: DataInfoSchema })
  validade?: DataInfo;

  @Prop({ type: String })
  plano?: string;
}

export const ConvenioPacienteSchema =
  SchemaFactory.createForClass(ConvenioPaciente);

@Schema({ timestamps: true, collection: 'pacientes' })
export class Paciente {
  @Prop({ type: String, required: true })
  nome_completo: string;

  @Prop({ type: DataInfoSchema, required: true })
  data_nascimento: DataInfo;

  @Prop({
    type: String,
    required: true,
    enum: ['masculino', 'feminino', 'intersexo'],
  })
  sexo: string;

  @Prop({ type: String, required: true, unique: true, index: true })
  cpf: string;

  @Prop({ type: String })
  rg?: string;

  @Prop({ type: String })
  nome_mae?: string;

  @Prop({ type: String })
  naturalidade?: string;

  @Prop({ type: ContatoSchema, required: true })
  contato: Contato;

  @Prop({ type: EnderecoSchema, required: true })
  endereco: Endereco;

  @Prop({ type: [ConvenioPacienteSchema], default: [] })
  convenios: ConvenioPaciente[];

  @Prop({ type: Boolean, required: true, default: true })
  ativo: boolean;
}

export const PacienteSchema = SchemaFactory.createForClass(Paciente);

PacienteSchema.index({ nome_completo: 'text' });
PacienteSchema.index({
  'convenios.convenio_id': 1,
  'convenios.numero_carteirinha': 1,
});
PacienteSchema.index({ ativo: 1 });
