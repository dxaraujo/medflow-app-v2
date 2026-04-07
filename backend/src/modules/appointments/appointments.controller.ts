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
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { CancelAppointmentDto } from './dto/cancel-appointment.dto';
import { QueryAppointmentDto } from './dto/query-appointment.dto';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles, Role } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Appointments')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Criar novo agendamento' })
  @ApiResponse({ status: 201, description: 'Agendamento criado com sucesso' })
  @ApiResponse({ status: 409, description: 'Conflito de horário' })
  async create(
    @Body() createAppointmentDto: CreateAppointmentDto,
    @CurrentUser('userId') userId: string,
  ) {
    const data = await this.appointmentsService.create(
      createAppointmentDto,
      userId,
    );
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Agendamento criado com sucesso',
      data,
    };
  }

  @Get()
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Listar agendamentos' })
  async findAll(@Query() query: QueryAppointmentDto) {
    return this.appointmentsService.findAll(query);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Buscar agendamento por ID' })
  @ApiResponse({ status: 200, description: 'Agendamento encontrado' })
  @ApiResponse({ status: 404, description: 'Agendamento não encontrado' })
  async findOne(@Param('id') id: string) {
    const data = await this.appointmentsService.findById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Agendamento encontrado',
      data,
    };
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Atualizar agendamento' })
  async update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    const data = await this.appointmentsService.update(
      id,
      updateAppointmentDto,
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Agendamento atualizado com sucesso',
      data,
    };
  }

  @Patch(':id/status')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Atualizar status do agendamento' })
  async updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateStatusDto,
  ) {
    const data = await this.appointmentsService.updateStatus(
      id,
      updateStatusDto.status,
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Status atualizado com sucesso',
      data,
    };
  }

  @Patch(':id/cancel')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
  @ApiOperation({ summary: 'Cancelar agendamento' })
  async cancel(
    @Param('id') id: string,
    @Body() cancelDto: CancelAppointmentDto,
  ) {
    const data = await this.appointmentsService.cancel(
      id,
      cancelDto.cancelReason,
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Agendamento cancelado com sucesso',
      data,
    };
  }
}
