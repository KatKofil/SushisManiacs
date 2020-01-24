import { Controller, Post, HttpStatus, HttpCode, Get, Response, Body, UseGuards } from '@nestjs/common';
import { StuffService } from '../stuff.service';
import { Stuff } from '../stuff.entity';
import { AuthGuard } from '@nestjs/passport';
import * as crypto from 'crypto';

@Controller('stuff')
export class StuffController {
    constructor(private stuffService: StuffService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('')  
    async getstuff(@Response() res: any) {
        return res.status(HttpStatus.OK).json(await this.stuffService.getAll());
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post('detail')
    async getCracterDetail(@Response() res: any, @Body() body: any) {
        return res.status(HttpStatus.OK).json(await this.stuffService.findById(body.id));
    }

    @Post('create')
    async createstuff(@Response() res: any, @Body() body: any) {
        return res.status(HttpStatus.OK).json(await this.stuffService.create(body));
    }

}