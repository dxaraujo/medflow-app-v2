import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class ContatoEmergencia {
  @Prop({ type: String, required: true })
  nome: string;

  @Prop({ type: String })
  parentesco?: string;

  @Prop({ type: String, required: true })
  telefone: string;
}

export const ContatoEmergenciaSchema =
  SchemaFactory.createForClass(ContatoEmergencia);

@Schema({ _id: false })
export class Contato {
  @Prop({ type: String, required: true })
  telefone_principal: string;

  @Prop({ type: String })
  telefone_secundario?: string;

  @Prop({ type: String })
  email?: string;

  @Prop({ type: ContatoEmergenciaSchema })
  contato_emergencia?: ContatoEmergencia;
}

export const ContatoSchema = SchemaFactory.createForClass(Contato);
