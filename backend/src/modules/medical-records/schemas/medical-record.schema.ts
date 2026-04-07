import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MedicalRecordDocument = HydratedDocument<MedicalRecord>;

@Schema({ _id: false })
export class IcdCode {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  description: string;
}

@Schema({ _id: false })
export class VitalSigns {
  @Prop()
  bloodPressure: string;

  @Prop()
  heartRate: number;

  @Prop()
  temperature: number;

  @Prop()
  respiratoryRate: number;

  @Prop()
  oxygenSaturation: number;

  @Prop()
  weight: number;

  @Prop()
  height: number;
}

@Schema({ timestamps: true })
export class MedicalRecord {
  @Prop({ type: Types.ObjectId, ref: 'Patient', required: true })
  patientId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Doctor', required: true })
  doctorId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Appointment' })
  appointmentId: Types.ObjectId;

  @Prop({ required: true, default: () => new Date() })
  date: Date;

  @Prop()
  anamnesis: string;

  @Prop()
  physicalExamination: string;

  @Prop()
  diagnosis: string;

  @Prop({ type: [IcdCode], default: [] })
  icdCodes: IcdCode[];

  @Prop()
  treatment: string;

  @Prop()
  observations: string;

  @Prop({ type: VitalSigns })
  vitalSigns: VitalSigns;
}

export const MedicalRecordSchema =
  SchemaFactory.createForClass(MedicalRecord);

MedicalRecordSchema.index({ patientId: 1 });
MedicalRecordSchema.index({ doctorId: 1 });
MedicalRecordSchema.index({ appointmentId: 1 });
MedicalRecordSchema.index({ date: -1 });
