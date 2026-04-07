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
import { AtendimentosService } from './atendimentos.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';
import { STATUS_ATENDIMENTO } from './schemas/atendimento.schema';

@ApiTags('Atendimentos')
@Controller('atendimentos')
export class AtendimentosController {
  constructor(private readonly atendimentosService: AtendimentosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar atendimento' })
  create(@Body() dto: CreateAtendimentoDto) {
    return this.atendimentosService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar atendimentos (paginado)' })
  @ApiQuery({ name: 'paciente_id', required: false })
  @ApiQuery({ name: 'profissional_id', required: false })
  @ApiQuery({ name: 'status', required: false, enum: STATUS_ATENDIMENTO })
  @ApiQuery({
    name: 'data_inicio',
    required: false,
    description: 'ISO 8601 — início do período (data_atendimento)',
  })
  @ApiQuery({
    name: 'data_fim',
    required: false,
    description: 'ISO 8601 — fim do período (data_atendimento)',
  })
  findAll(
    @Query() pagination: PaginationDto,
    @Query('paciente_id') paciente_id?: string,
    @Query('profissional_id') profissional_id?: string,
    @Query('status') status?: string,
    @Query('data_inicio') data_inicio?: string,
    @Query('data_fim') data_fim?: string,
  ) {
    return this.atendimentosService.findAll(pagination, {
      paciente_id,
      profissional_id,
      status,
      data_inicio,
      data_fim,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar atendimento por ID' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.atendimentosService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar atendimento' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: UpdateAtendimentoDto,
  ) {
    return this.atendimentosService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover atendimento' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.atendimentosService.remove(id);
  }
}
