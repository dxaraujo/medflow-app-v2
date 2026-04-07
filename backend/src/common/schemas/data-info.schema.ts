import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class DataInfo {
  @Prop({ type: Date, required: true })
  data_completa: Date;

  @Prop({ type: Number, required: true, min: 1, max: 31 })
  dia: number;

  @Prop({ type: Number, required: true, min: 1, max: 12 })
  mes: number;

  @Prop({ type: Number, required: true })
  ano: number;

  @Prop({ type: Number, required: true, min: 0, max: 6 })
  dia_semana: number;

  @Prop({ type: Number, required: true, min: 1, max: 53 })
  semana_ano: number;

  @Prop({ type: Number, required: true, min: 1, max: 4 })
  trimestre: number;
}

export const DataInfoSchema = SchemaFactory.createForClass(DataInfo);
