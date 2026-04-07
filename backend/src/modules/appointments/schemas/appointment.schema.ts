import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AppointmentDocument = HydratedDocument<Appointment>;

export enum AppointmentStatus {
  SCHEDULED = 'scheduled',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show',
}

export enum AppointmentType {
  FIRST_VISIT = 'first_visit',
  FOLLOW_UP = 'follow_up',
  ROUTINE = 'routine',
}

@Schema({ timestamps: true })
export class Appointment {
  @Prop({ type: Types.ObjectId, ref: 'Patient', required: true })
  patientId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Doctor', required: true })
  doctorId: Types.ObjectId;

  @Prop({ required: true })
  dateTime: Date;

  @Prop({ required: true })
  endDateTime: Date;

  @Prop({
    required: true,
    enum: AppointmentStatus,
    default: AppointmentStatus.SCHEDULED,
  })
  status: AppointmentStatus;

  @Prop({ required: true, enum: AppointmentType })
  type: AppointmentType;

  @Prop()
  reason: string;

  @Prop()
  notes: string;

  @Prop()
  cancelledAt: Date;

  @Prop()
  cancelReason: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);

AppointmentSchema.index({ patientId: 1 });
AppointmentSchema.index({ doctorId: 1 });
AppointmentSchema.index({ dateTime: 1 });
AppointmentSchema.index({ doctorId: 1, dateTime: 1 });
