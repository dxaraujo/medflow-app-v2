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
import { ProfissionaisService } from './profissionais.service';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';

@ApiTags('Profissionais')
@Controller('profissionais')
export class ProfissionaisController {
  constructor(private readonly profissionaisService: ProfissionaisService) {}

  @Post()
  @ApiOperation({ summary: 'Criar profissional' })
  create(@Body() dto: CreateProfissionalDto) {
    return this.profissionaisService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar profissionais (paginado)' })
  @ApiQuery({ name: 'perfil', required: false, enum: ['medico', 'atendente'] })
  @ApiQuery({ name: 'ativo', required: false, type: Boolean })
  @ApiQuery({ name: 'search', required: false })
  findAll(
    @Query() pagination: PaginationDto,
    @Query('perfil') perfil?: string,
    @Query('ativo') ativo?: string,
    @Query('search') search?: string,
  ) {
    return this.profissionaisService.findAll(pagination, {
      perfil,
      ativo: ativo !== undefined ? ativo === 'true' : undefined,
      search,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar profissional por ID' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.profissionaisService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar profissional' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: UpdateProfissionalDto,
  ) {
    return this.profissionaisService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Desativar profissional (soft delete)' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.profissionaisService.remove(id);
  }
}
