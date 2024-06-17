import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanoContas } from './plano-contas.entity';
import { CreatePlanoContasDto } from './dto/create-plano-contas.dto';
import { UpdatePlanoContasDto } from './dto/update-plano-contas.dto';

@Injectable()
export class PlanoContasService {
  constructor(
    @InjectRepository(PlanoContas)
    private planoContasRepository: Repository<PlanoContas>,
  ) {}

  create(createPlanoContasDto: CreatePlanoContasDto): Promise<PlanoContas> {
    const planoContas = this.planoContasRepository.create(createPlanoContasDto);
    return this.planoContasRepository.save(planoContas);
  }

  findAll(): Promise<PlanoContas[]> {
    return this.planoContasRepository.find();
  }

  findOne(id: number): Promise<PlanoContas> {
    return this.planoContasRepository.findOneBy({ id });
  }

  async update(id: number, updatePlanoContasDto: UpdatePlanoContasDto): Promise<PlanoContas> {
    await this.planoContasRepository.update(id, updatePlanoContasDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.planoContasRepository.delete(id);
  }
}
