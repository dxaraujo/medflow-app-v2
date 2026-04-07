import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PrescriptionDocument = HydratedDocument<Prescription>;

export enum MedicationRoute {
  ORAL = 'oral',
  INTRAVENOUS = 'intravenous',
  INTRAMUSCULAR = 'intramuscular',
  SUBCUTANEOUS = 'subcutaneous',
  TOPICAL = 'topical',
  INHALATION = 'inhalation',
  OTHER = 'other',
}

@Schema({ _id: false })
export class PrescriptionItem {
  @Prop({ required: true })
  medication: string;

  @Prop({ required: true })
  dosage: string;

  @Prop({ required: true })
  frequency: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ enum: MedicationRoute, default: MedicationRoute.ORAL })
  route: MedicationRoute;

  @Prop()
  instructions: string;
}

@Schema({ timestamps: true })
export class Prescription {
  @Prop({ type: Types.ObjectId, ref: 'MedicalRecord', required: true })
  medicalRecordId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Patient', required: true })
  patientId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Doctor', required: true })
  doctorId: Types.ObjectId;

  @Prop({ required: true, default: () => new Date() })
  date: Date;

  @Prop({ type: [PrescriptionItem], required: true })
  items: PrescriptionItem[];

  @Prop()
  notes: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const PrescriptionSchema =
  SchemaFactory.createForClass(Prescription);

PrescriptionSchema.index({ patientId: 1 });
PrescriptionSchema.index({ doctorId: 1 });
PrescriptionSchema.index({ medicalRecordId: 1 });
PrescriptionSchema.index({ date: -1 });
