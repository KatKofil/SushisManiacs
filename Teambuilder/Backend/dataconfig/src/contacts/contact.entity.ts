import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    pseudo: string;

    @Column()
    hashPass: string;

    @Column()
    salt: string;

    @Column()
    email: string;

    @Column()
    lvlRole: string;
}