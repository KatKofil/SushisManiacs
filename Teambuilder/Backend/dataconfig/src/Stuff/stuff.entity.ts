import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  idStuff: number;

  @Column()
  name: string;

  @Column()
  describeStuff: string;

  @Column()
  pointMaki: number;

  @Column()
  pointBrochette: number;

  @Column()
  pointSushi: number;

  @Column()
  pointSashimi: number;

  @Column()
  timeMaki: number;

  @Column()
  timeBrochette: number;

  @Column()
  timeSushi: number;

  @Column()
  timeSashimi: number;

  @Column()
  saturation: number;
}