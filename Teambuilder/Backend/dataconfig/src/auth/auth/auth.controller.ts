import { Controller, Post, HttpStatus, HttpCode, Get, Response, Body } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User } from '../../users/user.entity';
import { UserService } from '../../users/user.service';
import * as crypto from 'crypto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
      private readonly userService: UserService) {}

    @Post('login')  
    async loginUser(@Response() res: any, @Body() body: any) {
      if (!(body && body.username && body.password)) {
        return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
      }
  
      const user = await this.userService.getUserByUsername(body.username);
      if (user) {
        const pass = crypto.createHmac('sha256', body.password + user.salt).digest('hex');
        if (await this.userService.compareHash(pass, user.hashPass)) {
          return res.status(HttpStatus.OK).json(await this.authService.login(user));
        }
      }
  
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username or password wrong!' });
    }
    @Post('register')
    async registerUser(@Response() res: any, @Body() body: any) {
        if (!(body && body.username && body.password && body.email)) {
          return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
        }
    
        let user = await this.userService.getUserByUsername(body.username);
    
        if (user) {
          return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username exists' });
        } else {
          var salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          var pass = crypto.createHmac('sha256', body.password + salt).digest('hex');
          var newContact: User = {
            "idUser": 2,
            "pseudo": body.username,
            "hashPass": pass,
            "email": body.email,
            "salt": salt,
            "lvlRole": 0,
        }
          user = await this.userService.create(newContact);
          if (user) {
            user.hashPass = undefined;
          }
        }
        return res.status(HttpStatus.OK).json(await this.authService.login(user));
      }
    }
