import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class TeamsService {
    constructor(
        @InjectRepository(Team)
        private teamRepository: Repository<Team>,
    ) { }

    async  findAll(): Promise<Team[]> {
        return await this.teamRepository.find();
    }

    async  create(team: Team): Promise<Team> {
        return await this.teamRepository.save(team);
    }

    async update(team: Team): Promise<UpdateResult> {
        return await this.teamRepository.update(team.idTeam, team);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.teamRepository.delete(id);
    }
}
