import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class Caracter {
  @PrimaryGeneratedColumn()
  idCaracter: number;

  @Column()
  name: string;

  @Column()
  describeCaracter: string;

  @Column()
  sushieTime: number;

  @Column()
  makiTime: number;

  @Column()
  brochetteTime: number;

  @Column()
  sashimiTime: number;

  @Column()
  actifDescription: string;
}