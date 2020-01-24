import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Caracter } from './caracter.entity';

@Injectable()
export class CaracterService {
    constructor(
        @InjectRepository(Caracter)
        private caracterRepository: Repository<Caracter>,
    ) {}

    async findById(id: number): Promise<Caracter> {
        return await this.caracterRepository.findOne({
            where: {
                idCaracter: id,
            }
        });
    }

    async getAll(): Promise<Caracter[]> {
        return this.caracterRepository.find();
    }

    async create(caracter: any): Promise<Caracter> {
        return await this.caracterRepository.save(caracter);
    }
}