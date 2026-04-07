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
import { ContasPagarService } from './contas-pagar.service';
import { CreateContaPagarDto } from './dto/create-conta-pagar.dto';
import { UpdateContaPagarDto } from './dto/update-conta-pagar.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';

@ApiTags('Contas a Pagar')
@Controller('contas-pagar')
export class ContasPagarController {
  constructor(private readonly contasPagarService: ContasPagarService) {}

  @Post()
  @ApiOperation({ summary: 'Criar conta a pagar' })
  create(@Body() dto: CreateContaPagarDto) {
    return this.contasPagarService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar contas a pagar (paginado)' })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'categoria_despesa', required: false })
  @ApiQuery({ name: 'data_inicio', required: false })
  @ApiQuery({ name: 'data_fim', required: false })
  findAll(
    @Query() pagination: PaginationDto,
    @Query('status') status?: string,
    @Query('categoria_despesa') categoria_despesa?: string,
    @Query('data_inicio') data_inicio?: string,
    @Query('data_fim') data_fim?: string,
  ) {
    return this.contasPagarService.findAll(pagination, {
      status,
      categoria_despesa,
      data_inicio,
      data_fim,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar conta a pagar por ID' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.contasPagarService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar conta a pagar' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: UpdateContaPagarDto,
  ) {
    return this.contasPagarService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancelar conta a pagar' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.contasPagarService.cancel(id);
  }
}
