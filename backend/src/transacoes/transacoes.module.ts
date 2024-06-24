import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransacoesService } from './transacoes.service';
import { TransacoesController } from './transacoes.controller';
import { Transacao } from './transacao.entity';
import { PlanoContas } from '../plano-contas/plano-contas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transacao, PlanoContas])],
  providers: [TransacoesService],
  controllers: [TransacoesController],
})
export class TransacoesModule {}
