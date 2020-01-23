import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from "../users/user.service";
import { AuthService } from '../auth/auth.service';
import { AuthController } from "../auth/auth/auth.controller";
import { jwtConstants } from '../constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
      secret: jwtConstants.secret
  })
  ],
  providers: [AuthService, UserService, JwtStrategy],
  controllers: [AuthController]
})

export class AuthModule {}