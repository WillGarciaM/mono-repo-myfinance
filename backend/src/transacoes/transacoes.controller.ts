// src/transacoes/transacoes.controller.ts
import { Controller, Get, Post, Body, Patch, Put, Param, Delete, Query } from '@nestjs/common';
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

  @Get('intervalo')
  findWithinDateRange(@Query('startDate') startDate: string, @Query('endDate') endDate: string) {
    return this.transacoesService.findWithinDateRange(new Date(startDate), new Date(endDate));
  }

  @Get()
  findAll() {
    return this.transacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transacoesService.findOne(id);
  }

  @Patch(':id')
  updatePartial(@Param('id') id: number, @Body() updateTransacaoDto: UpdateTransacaoDto) {
    return this.transacoesService.update(id, updateTransacaoDto);
  }

  @Put(':id')
  updateFull(@Param('id') id: number, @Body() updateTransacaoDto: CreateTransacaoDto) {
    return this.transacoesService.update(id, updateTransacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transacoesService.remove(id);
  }
}
