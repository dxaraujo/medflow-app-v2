import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { MedicalRecordsService } from './medical-records.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { QueryMedicalRecordDto } from './dto/query-medical-record.dto';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Role } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Medical Records')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('medical-records')
export class MedicalRecordsController {
  constructor(
    private readonly medicalRecordsService: MedicalRecordsService,
  ) {}

  @Post()
  @Roles(Role.DOCTOR)
  @ApiOperation({ summary: 'Criar prontuário médico' })
  @ApiResponse({ status: 201, description: 'Prontuário criado com sucesso' })
  async create(@Body() createDto: CreateMedicalRecordDto) {
    const data = await this.medicalRecordsService.create(createDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Prontuário criado com sucesso',
      data,
    };
  }

  @Get()
  @Roles(Role.ADMIN, Role.DOCTOR)
  @ApiOperation({ summary: 'Listar prontuários' })
  async findAll(@Query() query: QueryMedicalRecordDto) {
    return this.medicalRecordsService.findAll(query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.DOCTOR)
  @ApiOperation({ summary: 'Buscar prontuário por ID' })
  @ApiResponse({ status: 200, description: 'Prontuário encontrado' })
  @ApiResponse({ status: 404, description: 'Prontuário não encontrado' })
  async findOne(@Param('id') id: string) {
    const data = await this.medicalRecordsService.findById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Prontuário encontrado',
      data,
    };
  }

  @Get('patient/:patientId')
  @Roles(Role.ADMIN, Role.DOCTOR)
  @ApiOperation({ summary: 'Buscar prontuários por paciente' })
  async findByPatient(@Param('patientId') patientId: string) {
    const data =
      await this.medicalRecordsService.findByPatientId(patientId);
    return {
      statusCode: HttpStatus.OK,
      message: 'Prontuários do paciente',
      data,
    };
  }

  @Patch(':id')
  @Roles(Role.DOCTOR)
  @ApiOperation({ summary: 'Atualizar prontuário (até 24h após criação)' })
  @ApiResponse({ status: 200, description: 'Prontuário atualizado com sucesso' })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateMedicalRecordDto,
    @CurrentUser('userId') userId: string,
  ) {
    const data = await this.medicalRecordsService.update(
      id,
      updateDto,
      userId,
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Prontuário atualizado com sucesso',
      data,
    };
  }
}
