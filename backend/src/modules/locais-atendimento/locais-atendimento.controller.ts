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
import { LocaisAtendimentoService } from './locais-atendimento.service';
import { CreateLocalAtendimentoDto } from './dto/create-local-atendimento.dto';
import { UpdateLocalAtendimentoDto } from './dto/update-local-atendimento.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';

@ApiTags('Locais de Atendimento')
@Controller('locais-atendimento')
export class LocaisAtendimentoController {
  constructor(
    private readonly locaisAtendimentoService: LocaisAtendimentoService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar local de atendimento' })
  create(@Body() dto: CreateLocalAtendimentoDto) {
    return this.locaisAtendimentoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar locais de atendimento (paginado)' })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'ativo', required: false, type: Boolean })
  findAll(
    @Query() pagination: PaginationDto,
    @Query('search') search?: string,
    @Query('ativo') ativo?: string,
  ) {
    const filters = {
      search,
      ativo: ativo !== undefined ? ativo === 'true' : undefined,
    };
    return this.locaisAtendimentoService.findAll(pagination, filters);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar local de atendimento por ID' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.locaisAtendimentoService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar local de atendimento' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: UpdateLocalAtendimentoDto,
  ) {
    return this.locaisAtendimentoService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Desativar local de atendimento (soft delete)' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.locaisAtendimentoService.remove(id);
  }
}
