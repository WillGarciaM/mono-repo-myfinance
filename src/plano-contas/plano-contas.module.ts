import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanoContasService } from './plano-contas.service';
import { PlanoContasController } from './plano-contas.controller';
import { PlanoContas } from './plano-contas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanoContas])],
  providers: [PlanoContasService],
  controllers: [PlanoContasController],
})
export class PlanoContasModule {}
