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
import { LancamentosReceitaService } from './lancamentos-receita.service';
import { CreateLancamentoReceitaDto } from './dto/create-lancamento-receita.dto';
import { UpdateLancamentoReceitaDto } from './dto/update-lancamento-receita.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';

@ApiTags('Lançamentos de Receita')
@Controller('lancamentos-receita')
export class LancamentosReceitaController {
  constructor(
    private readonly lancamentosReceitaService: LancamentosReceitaService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar lançamento de receita' })
  create(@Body() dto: CreateLancamentoReceitaDto) {
    return this.lancamentosReceitaService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar lançamentos de receita (paginado)' })
  @ApiQuery({
    name: 'categoria',
    required: false,
    enum: ['particular', 'convenio'],
  })
  @ApiQuery({ name: 'status_pagamento', required: false })
  @ApiQuery({ name: 'data_inicio', required: false })
  @ApiQuery({ name: 'data_fim', required: false })
  findAll(
    @Query() pagination: PaginationDto,
    @Query('categoria') categoria?: string,
    @Query('status_pagamento') status_pagamento?: string,
    @Query('data_inicio') data_inicio?: string,
    @Query('data_fim') data_fim?: string,
  ) {
    return this.lancamentosReceitaService.findAll(pagination, {
      categoria,
      status_pagamento,
      data_inicio,
      data_fim,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar lançamento por ID' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.lancamentosReceitaService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar lançamento de receita' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: UpdateLancamentoReceitaDto,
  ) {
    return this.lancamentosReceitaService.update(id, dto);
  }
}
