import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export enum BloodType {
  A_POSITIVE = 'A+',
  A_NEGATIVE = 'A-',
  B_POSITIVE = 'B+',
  B_NEGATIVE = 'B-',
  AB_POSITIVE = 'AB+',
  AB_NEGATIVE = 'AB-',
  O_POSITIVE = 'O+',
  O_NEGATIVE = 'O-',
}

@Schema({ _id: false })
export class Address {
  @Prop()
  street: string;

  @Prop()
  number: string;

  @Prop()
  complement: string;

  @Prop()
  neighborhood: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  zipCode: string;
}

@Schema({ _id: false })
export class HealthInsurance {
  @Prop()
  provider: string;

  @Prop()
  planName: string;

  @Prop()
  cardNumber: string;

  @Prop()
  expirationDate: Date;
}

@Schema({ _id: false })
export class EmergencyContact {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  relationship: string;
}

@Schema({ timestamps: true })
export class Patient {
  @Prop({ required: true, trim: true })
  firstName: string;

  @Prop({ required: true, trim: true })
  lastName: string;

  @Prop({ required: true, unique: true, trim: true })
  cpf: string;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true, enum: Gender })
  gender: Gender;

  @Prop({ lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  secondaryPhone: string;

  @Prop({ type: Address })
  address: Address;

  @Prop({ type: HealthInsurance })
  healthInsurance: HealthInsurance;

  @Prop({ type: EmergencyContact })
  emergencyContact: EmergencyContact;

  @Prop({ enum: BloodType })
  bloodType: BloodType;

  @Prop({ type: [String], default: [] })
  allergies: string[];

  @Prop()
  notes: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);

PatientSchema.index({ lastName: 'text', firstName: 'text' });
PatientSchema.index({ email: 1 });
