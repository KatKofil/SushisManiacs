import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

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

  @BeforeInsert()
  hashPassword() {
    this.hashPass = crypto.createHmac('sha256', this.hashPass).digest('hex');
  }
}