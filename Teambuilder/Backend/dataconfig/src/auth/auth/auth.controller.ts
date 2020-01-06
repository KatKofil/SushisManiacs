import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User } from '../user.entity';
import * as crypto from 'crypto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() user: User): Promise<any> {
      return this.authService.login(user);
    }  

    @Post('register')
    async register(@Body() user: any): Promise<any> {
      console.log(user.password)
      var salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      var pass = crypto.createHmac('sha256', user.password + salt).digest('hex');
      var newContact: User = {
        "idUser": 2,
        "pseudo": user.username,
        "hashPass": pass,
        "email": user.email,
        "salt": salt,
        "lvlRole": 0,
    }
    console.log(newContact)
      return this.authService.register(newContact);
    }  
}
