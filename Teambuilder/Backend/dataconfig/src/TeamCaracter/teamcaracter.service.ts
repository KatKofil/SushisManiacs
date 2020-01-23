import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamCaracter } from './teamcaracter.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class TeamCaracterService {
    constructor(
        @InjectRepository(TeamCaracter)
        private TeamCaracterRepository: Repository<TeamCaracter>,
    ) { }

    async  findAll(): Promise<TeamCaracter[]> {
        return await this.TeamCaracterRepository.find();
    }

    async  create(TeamCaracter: TeamCaracter): Promise<TeamCaracter> {
        return await this.TeamCaracterRepository.save(TeamCaracter);
    }

    async update(TeamCaracter: TeamCaracter): Promise<UpdateResult> {
        return await this.TeamCaracterRepository.update(TeamCaracter.idTeam, TeamCaracter);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.TeamCaracterRepository.delete(id);
    }
}
