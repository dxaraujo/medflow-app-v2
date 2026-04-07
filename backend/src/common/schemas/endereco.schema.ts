import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Endereco {
  @Prop({ type: String, required: true })
  logradouro: string;

  @Prop({ type: String, required: true })
  numero: string;

  @Prop({ type: String })
  complemento?: string;

  @Prop({ type: String, required: true })
  bairro: string;

  @Prop({ type: String, required: true })
  cidade: string;

  @Prop({ type: String, required: true, minlength: 2, maxlength: 2 })
  estado: string;

  @Prop({ type: String, required: true })
  cep: string;

  @Prop({ type: String, default: 'Brasil' })
  pais: string;
}

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);
