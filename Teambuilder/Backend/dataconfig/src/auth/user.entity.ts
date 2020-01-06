import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column()
  pseudo: string;

  @Column()
  email: string;

  @Column()
  hashPass: string;

  @Column()
  salt: string;

  @Column()
  lvlRole: number;
}