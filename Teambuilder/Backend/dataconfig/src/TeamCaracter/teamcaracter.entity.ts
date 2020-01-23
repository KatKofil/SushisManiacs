import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class TeamCaracter {
    @PrimaryColumn()
    idTeam: number;

    @Column()
    idCaracter: number;

    @Column()
    idStuff: number;
}