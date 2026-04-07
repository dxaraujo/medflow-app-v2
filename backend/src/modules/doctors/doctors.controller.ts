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
  ApiQuery,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { QueryDoctorDto } from './dto/query-doctor.dto';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Role } from '../../common/decorators/roles.decorator';
import { AppointmentsService } from '../appointments/appointments.service';

@ApiTags('Doctors')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('doctors')
export class DoctorsController {
  constructor(
    private readonly doctorsService: DoctorsService,
    private readonly appointmentsService: AppointmentsService,
  ) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Cadastrar novo médico' })
  @ApiResponse({ status: 201, description: 'Médico cadastrado com sucesso' })
  @ApiResponse({ status: 409, description: 'CRM já cadastrado' })
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    const data = await this.doctorsService.create(createDoctorDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Médico cadastrado com sucesso',
      data,
    };
  }

  @Get()
  @Roles(Role.ADMIN, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Listar médicos' })
  async findAll(@Query() query: QueryDoctorDto) {
    return this.doctorsService.findAll(query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Buscar médico por ID' })
  @ApiResponse({ status: 200, description: 'Médico encontrado' })
  @ApiResponse({ status: 404, description: 'Médico não encontrado' })
  async findOne(@Param('id') id: string) {
    const data = await this.doctorsService.findById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Médico encontrado',
      data,
    };
  }

  @Get(':id/available-slots')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Buscar horários disponíveis do médico' })
  @ApiQuery({ name: 'date', required: true, example: '2025-01-15' })
  async getAvailableSlots(
    @Param('id') id: string,
    @Query('date') date: string,
  ) {
    const appointments =
      await this.appointmentsService.findByDoctorAndDate(id, date);
    const data = await this.doctorsService.getAvailableSlots(
      id,
      date,
      appointments,
    );
    return {
      statusCode: HttpStatus.OK,
      data,
    };
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Atualizar dados do médico' })
  @ApiResponse({ status: 200, description: 'Médico atualizado com sucesso' })
  async update(
    @Param('id') id: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    const data = await this.doctorsService.update(id, updateDoctorDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Médico atualizado com sucesso',
      data,
    };
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Desativar médico (soft delete)' })
  async remove(@Param('id') id: string) {
    const data = await this.doctorsService.deactivate(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Médico desativado com sucesso',
      data,
    };
  }
}
