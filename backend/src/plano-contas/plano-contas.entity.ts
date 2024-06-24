import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlanoContas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  tipo: string;
}
