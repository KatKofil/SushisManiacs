import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff/stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stuff } from './stuff.entity';
import { JwtStrategy } from "../auth/jwt.strategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([Stuff]),
  ],
  providers: [StuffService, JwtStrategy],
  controllers: [StuffController]
})
export class StuffModule {}