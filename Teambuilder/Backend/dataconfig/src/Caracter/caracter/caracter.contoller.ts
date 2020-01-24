import { Controller, Post, HttpStatus, HttpCode, Get, Response, Body, UseGuards } from '@nestjs/common';
import { CaracterService } from '../caracter.service';
import { Caracter } from '../caracter.entity';
import { AuthGuard } from '@nestjs/passport';
import * as crypto from 'crypto';

@Controller('caracter')
export class CaracterController {
    constructor(private caracterService: CaracterService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('')  
    async getCaracter(@Response() res: any) {
        return res.status(HttpStatus.OK).json(await this.caracterService.getAll());
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post('detail')
    async getCracterDetail(@Response() res: any, @Body() body: any) {
        return res.status(HttpStatus.OK).json(await this.caracterService.findById(body.id));
    }

    @Post('create')
    async createCaracter(@Response() res: any, @Body() body: any) {
        return res.status(HttpStatus.OK).json(await this.caracterService.create(body));
    }

}