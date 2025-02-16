import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
) { }

private async validate(userData: User): Promise<User> {
  return await this.userService.getUserByUsername(userData.pseudo);
}

public async login(user: User): Promise< any | { status: number }>{
  return this.validate(user).then((userData)=>{
    if(!userData){
      return { status: 404 };
    }
    let payload = `${userData.pseudo}${userData.idUser}`;
    const accessToken = this.jwtService.sign(payload);

    return {
       expires_in: 3600,
       access_token: accessToken,
       user_id: payload,
       email: userData.email,
       status: 200
    };

  });
}

public async register(user: User): Promise<any>{
  return this.userService.create(user)
} 
  //   constructor(
  //       private readonly userService: UserService,
  //       private readonly jwtService: JwtService
  //   ) {}

  //   async createToken(id: number, username: string) {
  //     const expiresIn = 60 * 60;
  //     const secretOrKey = 'secret';
  //     const user = { username };
  //     const token = jwt.sign(user, secretOrKey, { expiresIn });
  
  //     return { expires_in: expiresIn, token };
  //   }

  //   private async validate(userData: User): Promise<User> {
  //       return await this.userService.findByEmail(userData.email);
  //   }

  //   public async login(user: User): Promise< any | { status: number }>{
  //       return this.validate(user).then((userData)=>{
  //         if(!userData){
  //           return { status: 404 };
  //         }
  //         let payload = `${userData.pseudo}${userData.idUser}`;
  //         const accessToken = this.jwtService.sign(payload);

  //         return {
  //            expires_in: 3600,
  //            access_token: accessToken,
  //            user_id: payload,
  //            status: 200
  //         };

  //       });
  //   }

  //   public async register(user: User): Promise<any>{
  //       return this.userService.create(user);
  //   }


  // async validateUser(signedUser): Promise<any> {
  //   if (signedUser&&signedUser.username) {
  //     return Boolean(this.userService.getUserByUsername(signedUser.username));
  //   }

  //   return false;
  // }

}
