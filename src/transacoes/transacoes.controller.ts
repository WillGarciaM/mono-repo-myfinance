import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { UpdateTransacaoDto } from './dto/update-transacao.dto';

@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly transacoesService: TransacoesService) {}

  @Post()
  create(@Body() createTransacaoDto: CreateTransacaoDto) {
    return this.transacoesService.create(createTransacaoDto);
  }

  @Get()
  findAll() {
    return this.transacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transacoesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTransacaoDto: UpdateTransacaoDto) {
    return this.transacoesService.update(id, updateTransacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transacoesService.remove(id);
  }
}
