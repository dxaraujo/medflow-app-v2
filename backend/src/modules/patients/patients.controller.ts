import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
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
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { QueryPatientDto } from './dto/query-patient.dto';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Role } from '../../common/decorators/roles.decorator';

@ApiTags('Patients')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @Roles(Role.ADMIN, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Cadastrar novo paciente' })
  @ApiResponse({ status: 201, description: 'Paciente cadastrado com sucesso' })
  @ApiResponse({ status: 409, description: 'CPF já cadastrado' })
  async create(@Body() createPatientDto: CreatePatientDto) {
    const data = await this.patientsService.create(createPatientDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Paciente cadastrado com sucesso',
      data,
    };
  }

  @Get()
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Listar pacientes com paginação e busca' })
  @ApiResponse({ status: 200, description: 'Listagem de pacientes' })
  async findAll(@Query() query: QueryPatientDto) {
    return this.patientsService.findAll(query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Buscar paciente por ID' })
  @ApiResponse({ status: 200, description: 'Paciente encontrado' })
  @ApiResponse({ status: 404, description: 'Paciente não encontrado' })
  async findOne(@Param('id') id: string) {
    const data = await this.patientsService.findById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Paciente encontrado',
      data,
    };
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Atualizar dados do paciente' })
  @ApiResponse({ status: 200, description: 'Paciente atualizado com sucesso' })
  async update(
    @Param('id') id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    const data = await this.patientsService.update(id, updatePatientDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Paciente atualizado com sucesso',
      data,
    };
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Desativar paciente (soft delete)' })
  @ApiResponse({ status: 200, description: 'Paciente desativado com sucesso' })
  async remove(@Param('id') id: string) {
    const data = await this.patientsService.deactivate(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Paciente desativado com sucesso',
      data,
    };
  }
}
