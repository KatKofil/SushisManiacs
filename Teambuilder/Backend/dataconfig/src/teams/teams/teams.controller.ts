import { Controller, Get } from '@nestjs/common';
import { Team } from '../team.entity';
import { TeamsService } from '../teams.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('teams')
export class TeamsController {
    constructor(private teamsService: TeamsService){}
    
    @Get()
    index(): Promise<Team[]> {
        return this.teamsService.findAll();
    }

    @Post('createteams')
    async create(@Body() teamData: Team): Promise<any> {
        return this.teamsService.create(teamData);
    }  

    @Put(':idTeam/update')
    async update(@Param('idTeam') id, @Body() teamData: Team): Promise<any> {
        teamData.idTeam = Number(id);
        console.log('Update #' + teamData.idTeam)
        return this.teamsService.update(teamData);
    } 

    @Delete(':idTeam/delete')
    async delete(@Param('idTeam') idTeam): Promise<any> {
      return this.teamsService.delete(idTeam);
    }  

}
