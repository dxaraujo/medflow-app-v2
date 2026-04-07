import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type DoctorDocument = HydratedDocument<Doctor>;

@Schema({ _id: false })
export class WorkingHour {
  @Prop({ required: true, min: 0, max: 6 })
  dayOfWeek: number;

  @Prop({ required: true })
  startTime: string;

  @Prop({ required: true })
  endTime: string;
}

@Schema({ timestamps: true })
export class Doctor {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, unique: true })
  userId: Types.ObjectId;

  @Prop({ required: true, trim: true })
  firstName: string;

  @Prop({ required: true, trim: true })
  lastName: string;

  @Prop({ required: true, unique: true, trim: true })
  crm: string;

  @Prop({ type: [String], required: true })
  specialties: string[];

  @Prop()
  phone: string;

  @Prop({ required: true, lowercase: true, trim: true })
  email: string;

  @Prop({ default: 30, min: 15, max: 120 })
  consultationDuration: number;

  @Prop({ type: [WorkingHour], default: [] })
  workingHours: WorkingHour[];

  @Prop({ default: true })
  isActive: boolean;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);

DoctorSchema.index({ specialties: 1 });
