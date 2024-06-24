import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PlanoContas } from '../plano-contas/plano-contas.entity';

@Entity()
export class Transacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  data: Date;

  @ManyToOne(() => PlanoContas)
  planoContas: PlanoContas;

  @Column('decimal')
  valor: number;
}
