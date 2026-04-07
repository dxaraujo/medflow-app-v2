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
import { ConveniosService } from './convenios.service';
import { CreateConvenioDto } from './dto/create-convenio.dto';
import { UpdateConvenioDto } from './dto/update-convenio.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';

@ApiTags('Convênios')
@Controller('convenios')
export class ConveniosController {
  constructor(private readonly conveniosService: ConveniosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar convênio' })
  create(@Body() dto: CreateConvenioDto) {
    return this.conveniosService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar convênios (paginado)' })
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
    return this.conveniosService.findAll(pagination, filters);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar convênio por ID' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.conveniosService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar convênio' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: UpdateConvenioDto,
  ) {
    return this.conveniosService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Desativar convênio (soft delete)' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.conveniosService.remove(id);
  }
}
