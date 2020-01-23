import { Controller, Get, UseGuards } from '@nestjs/common';
import { TeamCaracter } from '../teamcaracter.entity';
import { TeamCaracterService } from '../teamcaracter.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('teams')
export class TeamsCaracterController {
    constructor(private teamsService: TeamCaracterService){}
    
    @Get()
    index(): Promise<TeamCaracter[]> {
        return this.teamsService.findAll();
    }

    @Post('createteams')
    async create(@Body() teamData: TeamCaracter): Promise<any> {
        return this.teamsService.create(teamData);
    }  

    @UseGuards(AuthGuard('jwt'))
    @Post(':idTeam/update')
    async update(@Param('idTeam') id, @Body() teamData: TeamCaracter): Promise<any> {
        teamData.idTeam = Number(id);
        console.log('Update #' + teamData.idTeam)
        return this.teamsService.update(teamData);
    }

    @Delete(':idTeam/delete')
    async delete(@Param('idTeam') idTeam): Promise<any> {
      return this.teamsService.delete(idTeam);
    }  

}