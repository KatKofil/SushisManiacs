import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Stuff } from './stuff.entity';

@Injectable()
export class StuffService {
    constructor(
        @InjectRepository(Stuff)
        private stuffRepository: Repository<Stuff>,
    ) {}

    async findById(id: number): Promise<Stuff> {
        return await this.stuffRepository.findOne({
            where: {
                idstuff: id,
            }
        });
    }

    async getAll(): Promise<Stuff[]> {
        return this.stuffRepository.find();
    }

    async create(stuff: any): Promise<Stuff> {
        return await this.stuffRepository.save(stuff);
    }
}