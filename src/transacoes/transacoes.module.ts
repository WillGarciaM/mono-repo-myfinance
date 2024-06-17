import { Module } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { TransacoesController } from './transacoes.controller';

@Module({
  providers: [TransacoesService],
  controllers: [TransacoesController]
})
export class TransacoesModule {}
