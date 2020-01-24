import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TeamsModule } from './teams/teams.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from "./users/user.module";
import { CaracterModule } from "./Caracter/caracter.module";
import { StuffModule } from "./Stuff/stuff.module";

@Module({
  imports: [ContactsModule,TeamsModule,
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  UserModule,
  AuthModule,
  StuffModule,
  CaracterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
