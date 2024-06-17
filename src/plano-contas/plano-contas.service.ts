import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanoContas } from './plano-contas.entity';
import { CreatePlanoContasDto } from './dto/create-plano-contas.dto';
import { UpdatePlanoContasDto } from './dto/update-plano-contas.dto';
import { Transacao } from '../transacoes/transacao.entity';

@Injectable()
export class PlanoContasService {
  constructor(
    @InjectRepository(PlanoContas)
    private planoContasRepository: Repository<PlanoContas>,
    @InjectRepository(Transacao)
    private transacaoRepository: Repository<Transacao>,
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
    const planoContas = await this.findOne(id);
    if (!planoContas) {
      throw new NotFoundException('Plano de contas não encontrado');
    }
    await this.planoContasRepository.update(id, updatePlanoContasDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const planoContas = await this.findOne(id);
    if (!planoContas) {
      throw new NotFoundException('Plano de contas não encontrado');
    }

    const transacoes = await this.transacaoRepository.find({ where: { planoContas: { id } } });
    if (transacoes.length > 0) {
      throw new BadRequestException('Não é possível deletar um plano de contas que possui transações associadas.');
    }

    await this.planoContasRepository.delete(id);
  }
}
