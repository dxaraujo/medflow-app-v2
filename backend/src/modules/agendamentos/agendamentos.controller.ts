import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { AgendamentosService } from './agendamentos.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';

@ApiTags('Agendamentos')
@Controller('agendamentos')
export class AgendamentosController {
  constructor(private readonly agendamentosService: AgendamentosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar agendamento ou bloqueio' })
  create(@Body() dto: CreateAgendamentoDto) {
    return this.agendamentosService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar agendamentos (paginado)' })
  @ApiQuery({ name: 'profissional_id', required: false })
  @ApiQuery({ name: 'local_atendimento_id', required: false })
  @ApiQuery({ name: 'paciente_id', required: false })
  @ApiQuery({ name: 'tipo', required: false })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'data_inicio', required: false })
  @ApiQuery({ name: 'data_fim', required: false })
  findAll(
    @Query() pagination: PaginationDto,
    @Query('profissional_id') profissional_id?: string,
    @Query('local_atendimento_id') local_atendimento_id?: string,
    @Query('paciente_id') paciente_id?: string,
    @Query('tipo') tipo?: string,
    @Query('status') status?: string,
    @Query('data_inicio') data_inicio?: string,
    @Query('data_fim') data_fim?: string,
  ) {
    return this.agendamentosService.findAll(pagination, {
      profissional_id,
      local_atendimento_id,
      paciente_id,
      tipo,
      status,
      data_inicio,
      data_fim,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar agendamento por ID' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.agendamentosService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar agendamento' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: UpdateAgendamentoDto,
  ) {
    return this.agendamentosService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancelar agendamento' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.agendamentosService.cancel(id);
  }
}
