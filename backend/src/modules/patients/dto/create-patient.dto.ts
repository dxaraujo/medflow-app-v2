import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsOptional,
  IsDateString,
  IsArray,
  ValidateNested,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender, BloodType } from '../schemas/patient.schema';

class AddressDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  street?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  number?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  complement?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  neighborhood?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  city?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  state?: string;

  @ApiPropertyOptional({ example: '01001-000' })
  @IsOptional()
  @IsString()
  @Matches(/^\d{5}-\d{3}$/, { message: 'CEP deve estar no formato 00000-000' })
  zipCode?: string;
}

class HealthInsuranceDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  provider?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  planName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cardNumber?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expirationDate?: string;
}

class EmergencyContactDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  relationship?: string;
}

export class CreatePatientDto {
  @ApiProperty({ example: 'Maria' })
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  firstName: string;

  @ApiProperty({ example: 'Santos' })
  @IsString()
  @IsNotEmpty({ message: 'Sobrenome é obrigatório' })
  lastName: string;

  @ApiProperty({ example: '123.456.789-00' })
  @IsString()
  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'CPF deve estar no formato 000.000.000-00',
  })
  cpf: string;

  @ApiProperty({ example: '1990-05-15' })
  @IsDateString({}, { message: 'Data de nascimento inválida' })
  @IsNotEmpty({ message: 'Data de nascimento é obrigatória' })
  dateOfBirth: string;

  @ApiProperty({ enum: Gender, example: Gender.FEMALE })
  @IsEnum(Gender, { message: 'Gênero inválido' })
  gender: Gender;

  @ApiPropertyOptional({ example: 'maria@email.com' })
  @IsOptional()
  @IsEmail({}, { message: 'Email inválido' })
  email?: string;

  @ApiProperty({ example: '(11) 99999-9999' })
  @IsString()
  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  phone: string;

  @ApiPropertyOptional({ example: '(11) 88888-8888' })
  @IsOptional()
  @IsString()
  secondaryPhone?: string;

  @ApiPropertyOptional({ type: AddressDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDto)
  address?: AddressDto;

  @ApiPropertyOptional({ type: HealthInsuranceDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => HealthInsuranceDto)
  healthInsurance?: HealthInsuranceDto;

  @ApiPropertyOptional({ type: EmergencyContactDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => EmergencyContactDto)
  emergencyContact?: EmergencyContactDto;

  @ApiPropertyOptional({ enum: BloodType })
  @IsOptional()
  @IsEnum(BloodType, { message: 'Tipo sanguíneo inválido' })
  bloodType?: BloodType;

  @ApiPropertyOptional({ example: ['Penicilina', 'Dipirona'] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allergies?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
