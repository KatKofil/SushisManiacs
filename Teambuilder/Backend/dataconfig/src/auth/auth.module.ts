import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from "../users/user.service";
import { AuthService } from '../auth/auth.service';
import { AuthController } from "../auth/auth/auth.controller";

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
      secretOrPrivateKey: 'secret12356789'
  })
  ],
  providers: [AuthService, UserService],
  controllers: [AuthController]
})

export class AuthModule {}