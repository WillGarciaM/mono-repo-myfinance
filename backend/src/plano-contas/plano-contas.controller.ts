import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { PlanoContasService } from './plano-contas.service';
import { CreatePlanoContasDto } from './dto/create-plano-contas.dto';
import { UpdatePlanoContasDto } from './dto/update-plano-contas.dto';

@Controller('plano-contas')
export class PlanoContasController {
  constructor(private readonly planoContasService: PlanoContasService) {}

  @Post()
  create(@Body() createPlanoContasDto: CreatePlanoContasDto) {
    return this.planoContasService.create(createPlanoContasDto);
  }

  @Get()
  findAll() {
    return this.planoContasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.planoContasService.findOne(id);
  }

  @Patch(':id')
  updatePartial(@Param('id') id: number, @Body() updatePlanoContasDto: UpdatePlanoContasDto) {
    return this.planoContasService.update(id, updatePlanoContasDto);
  }

  @Put(':id')
  updateFull(@Param('id') id: number, @Body() updatePlanoContasDto: CreatePlanoContasDto) {
    return this.planoContasService.update(id, updatePlanoContasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.planoContasService.remove(id);
  }
}
