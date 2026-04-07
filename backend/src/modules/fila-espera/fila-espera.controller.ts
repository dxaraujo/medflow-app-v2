import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { FilaEsperaService } from './fila-espera.service';
import { CreateFilaEsperaDto } from './dto/create-fila-espera.dto';
import { UpdateFilaEsperaDto } from './dto/update-fila-espera.dto';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';

@ApiTags('Fila de Espera')
@Controller('fila-espera')
export class FilaEsperaController {
  constructor(private readonly filaEsperaService: FilaEsperaService) {}

  @Post()
  @ApiOperation({ summary: 'Check-in na fila de espera' })
  create(@Body() dto: CreateFilaEsperaDto) {
    return this.filaEsperaService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar fila de espera' })
  @ApiQuery({ name: 'profissional_id', required: false })
  @ApiQuery({ name: 'local_atendimento_id', required: false })
  @ApiQuery({ name: 'status', required: false })
  findAll(
    @Query('profissional_id') profissional_id?: string,
    @Query('local_atendimento_id') local_atendimento_id?: string,
    @Query('status') status?: string,
  ) {
    return this.filaEsperaService.findAll({
      profissional_id,
      local_atendimento_id,
      status,
    });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar status na fila' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: UpdateFilaEsperaDto,
  ) {
    return this.filaEsperaService.update(id, dto);
  }
}
