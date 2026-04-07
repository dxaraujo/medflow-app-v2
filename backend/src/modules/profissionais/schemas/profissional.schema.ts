import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Contato, ContatoSchema } from '../../../common/schemas/contato.schema';

export type ProfissionalDocument = HydratedDocument<Profissional>;

@Schema({ _id: false })
export class RegistroProfissional {
  @Prop({ type: String, required: true })
  crm: string;

  @Prop({ type: String, required: true, minlength: 2, maxlength: 2 })
  uf_crm: string;

  @Prop({ type: [String], default: [] })
  especialidades: string[];
}

export const RegistroProfissionalSchema =
  SchemaFactory.createForClass(RegistroProfissional);

@Schema({ timestamps: true, collection: 'profissionais' })
export class Profissional {
  @Prop({ type: String, required: true })
  nome_completo: string;

  @Prop({ type: String, required: true, unique: true, index: true })
  cpf: string;

  @Prop({ type: String, required: true, enum: ['medico', 'atendente'] })
  perfil: string;

  @Prop({ type: RegistroProfissionalSchema })
  registro_profissional?: RegistroProfissional;

  @Prop({ type: ContatoSchema, required: true })
  contato: Contato;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'LocalAtendimento' }],
    default: [],
  })
  locais_vinculados: Types.ObjectId[];

  @Prop({ type: Boolean, required: true, default: true })
  ativo: boolean;
}

export const ProfissionalSchema = SchemaFactory.createForClass(Profissional);

ProfissionalSchema.index(
  { 'registro_profissional.crm': 1, 'registro_profissional.uf_crm': 1 },
  { unique: true, sparse: true },
);
ProfissionalSchema.index({ perfil: 1, ativo: 1 });
ProfissionalSchema.index({ nome_completo: 'text' });
