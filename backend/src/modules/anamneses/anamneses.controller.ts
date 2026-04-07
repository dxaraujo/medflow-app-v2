import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AnamnesesService } from './anamneses.service';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';
import { UpdateAnamneseDto } from './dto/update-anamnese.dto';
import { ParseObjectIdPipe } from '../../common/pipes/parse-object-id.pipe';

@ApiTags('Anamneses')
@Controller('anamneses')
export class AnamnesesController {
  constructor(private readonly anamnesesService: AnamnesesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar anamnese' })
  create(@Body() dto: CreateAnamneseDto) {
    return this.anamnesesService.create(dto);
  }

  @Get('paciente/:pacienteId')
  @ApiOperation({ summary: 'Buscar anamnese por paciente' })
  findByPaciente(@Param('pacienteId', ParseObjectIdPipe) pacienteId: string) {
    return this.anamnesesService.findByPacienteId(pacienteId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar anamnese' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: UpdateAnamneseDto,
  ) {
    return this.anamnesesService.update(id, dto);
  }
}
