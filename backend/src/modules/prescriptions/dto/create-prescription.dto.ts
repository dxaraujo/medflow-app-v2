import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsMongoId,
  IsNotEmpty,
  IsEnum,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MedicationRoute } from '../schemas/prescription.schema';

class PrescriptionItemDto {
  @ApiProperty({ example: 'Paracetamol' })
  @IsString()
  @IsNotEmpty({ message: 'Medicamento é obrigatório' })
  medication: string;

  @ApiProperty({ example: '500mg' })
  @IsString()
  @IsNotEmpty({ message: 'Dosagem é obrigatória' })
  dosage: string;

  @ApiProperty({ example: '6/6h' })
  @IsString()
  @IsNotEmpty({ message: 'Frequência é obrigatória' })
  frequency: string;

  @ApiProperty({ example: '5 dias' })
  @IsString()
  @IsNotEmpty({ message: 'Duração é obrigatória' })
  duration: string;

  @ApiPropertyOptional({ enum: MedicationRoute, default: MedicationRoute.ORAL })
  @IsOptional()
  @IsEnum(MedicationRoute)
  route?: MedicationRoute;

  @ApiPropertyOptional({ example: 'Tomar após as refeições' })
  @IsOptional()
  @IsString()
  instructions?: string;
}

export class CreatePrescriptionDto {
  @ApiProperty({ description: 'ID do prontuário médico' })
  @IsMongoId()
  @IsNotEmpty()
  medicalRecordId: string;

  @ApiProperty({ description: 'ID do paciente' })
  @IsMongoId()
  @IsNotEmpty()
  patientId: string;

  @ApiProperty({ description: 'ID do médico' })
  @IsMongoId()
  @IsNotEmpty()
  doctorId: string;

  @ApiProperty({ type: [PrescriptionItemDto] })
  @IsArray()
  @ArrayMinSize(1, { message: 'Deve ter pelo menos um medicamento' })
  @ValidateNested({ each: true })
  @Type(() => PrescriptionItemDto)
  items: PrescriptionItemDto[];

  @ApiPropertyOptional({ example: 'Retorno em 7 dias se não houver melhora' })
  @IsOptional()
  @IsString()
  notes?: string;
}
