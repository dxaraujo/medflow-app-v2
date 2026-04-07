import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class IcdCodeDto {
  @ApiProperty({ example: 'G44.2' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: 'Cefaleia tipo tensional' })
  @IsString()
  @IsNotEmpty()
  description: string;
}

class VitalSignsDto {
  @ApiPropertyOptional({ example: '120/80' })
  @IsOptional()
  @IsString()
  bloodPressure?: string;

  @ApiPropertyOptional({ example: 72, minimum: 30, maximum: 250 })
  @IsOptional()
  @IsNumber()
  @Min(30, { message: 'Frequência cardíaca mínima: 30 bpm' })
  @Max(250, { message: 'Frequência cardíaca máxima: 250 bpm' })
  heartRate?: number;

  @ApiPropertyOptional({ example: 36.5, minimum: 30, maximum: 45 })
  @IsOptional()
  @IsNumber()
  @Min(30, { message: 'Temperatura mínima: 30°C' })
  @Max(45, { message: 'Temperatura máxima: 45°C' })
  temperature?: number;

  @ApiPropertyOptional({ example: 16, minimum: 5, maximum: 60 })
  @IsOptional()
  @IsNumber()
  @Min(5, { message: 'Frequência respiratória mínima: 5 irpm' })
  @Max(60, { message: 'Frequência respiratória máxima: 60 irpm' })
  respiratoryRate?: number;

  @ApiPropertyOptional({ example: 98, minimum: 0, maximum: 100 })
  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Saturação mínima: 0%' })
  @Max(100, { message: 'Saturação máxima: 100%' })
  oxygenSaturation?: number;

  @ApiPropertyOptional({ example: 70 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  weight?: number;

  @ApiPropertyOptional({ example: 175 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  height?: number;
}

export class CreateMedicalRecordDto {
  @ApiProperty({ description: 'ID do paciente' })
  @IsMongoId()
  @IsNotEmpty()
  patientId: string;

  @ApiProperty({ description: 'ID do médico' })
  @IsMongoId()
  @IsNotEmpty()
  doctorId: string;

  @ApiPropertyOptional({ description: 'ID do agendamento' })
  @IsOptional()
  @IsMongoId()
  appointmentId?: string;

  @ApiPropertyOptional({ example: 'Paciente relata dor de cabeça há 3 dias' })
  @IsOptional()
  @IsString()
  anamnesis?: string;

  @ApiPropertyOptional({ example: 'PA: 120/80, FC: 72bpm' })
  @IsOptional()
  @IsString()
  physicalExamination?: string;

  @ApiPropertyOptional({ example: 'Cefaleia tensional' })
  @IsOptional()
  @IsString()
  diagnosis?: string;

  @ApiPropertyOptional({ type: [IcdCodeDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IcdCodeDto)
  icdCodes?: IcdCodeDto[];

  @ApiPropertyOptional({ example: 'Prescrito analgésico e orientação de repouso' })
  @IsOptional()
  @IsString()
  treatment?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  observations?: string;

  @ApiPropertyOptional({ type: VitalSignsDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => VitalSignsDto)
  vitalSigns?: VitalSignsDto;
}
