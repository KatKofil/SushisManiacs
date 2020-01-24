import { Module } from '@nestjs/common';
import { CaracterService } from './caracter.service';
import { CaracterController } from './caracter/caracter.contoller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caracter } from './caracter.entity';
import { JwtStrategy } from "../auth/jwt.strategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([Caracter]),
  ],
  providers: [CaracterService, JwtStrategy],
  controllers: [CaracterController]
})
export class CaracterModule {}