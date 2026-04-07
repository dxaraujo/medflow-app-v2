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
import { PrescriptionsService } from './prescriptions.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { QueryPrescriptionDto } from './dto/query-prescription.dto';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Role } from '../../common/decorators/roles.decorator';

@ApiTags('Prescriptions')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('prescriptions')
export class PrescriptionsController {
  constructor(
    private readonly prescriptionsService: PrescriptionsService,
  ) {}

  @Post()
  @Roles(Role.DOCTOR)
  @ApiOperation({ summary: 'Criar prescrição médica' })
  @ApiResponse({ status: 201, description: 'Prescrição criada com sucesso' })
  async create(@Body() createDto: CreatePrescriptionDto) {
    const data = await this.prescriptionsService.create(createDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Prescrição criada com sucesso',
      data,
    };
  }

  @Get()
  @Roles(Role.ADMIN, Role.DOCTOR)
  @ApiOperation({ summary: 'Listar prescrições' })
  async findAll(@Query() query: QueryPrescriptionDto) {
    return this.prescriptionsService.findAll(query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.DOCTOR)
  @ApiOperation({ summary: 'Buscar prescrição por ID' })
  @ApiResponse({ status: 200, description: 'Prescrição encontrada' })
  @ApiResponse({ status: 404, description: 'Prescrição não encontrada' })
  async findOne(@Param('id') id: string) {
    const data = await this.prescriptionsService.findById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Prescrição encontrada',
      data,
    };
  }

  @Get('patient/:patientId')
  @Roles(Role.ADMIN, Role.DOCTOR)
  @ApiOperation({ summary: 'Buscar prescrições por paciente' })
  async findByPatient(@Param('patientId') patientId: string) {
    const data =
      await this.prescriptionsService.findByPatientId(patientId);
    return {
      statusCode: HttpStatus.OK,
      message: 'Prescrições do paciente',
      data,
    };
  }

  @Patch(':id')
  @Roles(Role.DOCTOR)
  @ApiOperation({ summary: 'Atualizar prescrição (até 24h após criação)' })
  @ApiResponse({ status: 200, description: 'Prescrição atualizada com sucesso' })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdatePrescriptionDto,
  ) {
    const data = await this.prescriptionsService.update(id, updateDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Prescrição atualizada com sucesso',
      data,
    };
  }
}
