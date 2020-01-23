import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    }
    
    async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
        if (password === hash)
            return true;
        return false;
        //return bcrypt.compare(password, hash);
      }

    async getUserByUsername(pseudo: string): Promise<User> {
        return (await this.userRepository.find({ pseudo }))[0];
      }

    async findByPseudo(pseudo: string): Promise<User | undefined> {
        return await this.userRepository.findOne({
            where: {
                pseudo: pseudo,
            }
        });
    }

    async create(user: any): Promise<User> {
        return await this.userRepository.save(user);
    }
}
