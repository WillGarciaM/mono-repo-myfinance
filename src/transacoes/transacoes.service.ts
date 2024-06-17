import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transacao } from './transacao.entity';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { UpdateTransacaoDto } from './dto/update-transacao.dto';
import { PlanoContas } from '../plano-contas/plano-contas.entity';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectRepository(Transacao)
    private transacaoRepository: Repository<Transacao>,
    @InjectRepository(PlanoContas)
    private planoContasRepository: Repository<PlanoContas>,
  ) {}

  async create(createTransacaoDto: CreateTransacaoDto): Promise<Transacao> {
    const planoContas = await this.planoContasRepository.findOneBy({ id: createTransacaoDto.planoContasId });
    if (!planoContas) {
      throw new NotFoundException('Plano de contas não encontrado');
    }
    const transacao = this.transacaoRepository.create({ ...createTransacaoDto, planoContas });
    return this.transacaoRepository.save(transacao);
  }

  findAll(): Promise<Transacao[]> {
    return this.transacaoRepository.find({ relations: ['planoContas'] });
  }

  findOne(id: number): Promise<Transacao> {
    return this.transacaoRepository.findOneBy({ id });
  }

  async update(id: number, updateTransacaoDto: UpdateTransacaoDto): Promise<Transacao> {
    const transacao = await this.findOne(id);
    if (!transacao) {
      throw new NotFoundException('Transação não encontrada');
    }

    if (updateTransacaoDto.planoContasId) {
      const planoContas = await this.planoContasRepository.findOneBy({ id: updateTransacaoDto.planoContasId });
      if (!planoContas) {
        throw new NotFoundException('Plano de contas não encontrado');
      }
      transacao.planoContas = planoContas;
    }

    Object.assign(transacao, updateTransacaoDto);
    await this.transacaoRepository.save(transacao);
    return transacao;
  }

  async remove(id: number): Promise<void> {
    const transacao = await this.findOne(id);
    if (!transacao) {
      throw new NotFoundException('Transação não encontrada');
    }
    await this.transacaoRepository.delete(id);
  }
}
