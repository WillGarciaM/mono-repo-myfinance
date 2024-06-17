import { Module } from '@nestjs/common';
import { PlanoContasService } from './plano-contas.service';
import { PlanoContasController } from './plano-contas.controller';

@Module({
  providers: [PlanoContasService],
  controllers: [PlanoContasController]
})
export class PlanoContasModule {}
