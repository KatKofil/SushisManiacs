// import * as passport from 'passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { Injectable } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Injectable()

// //http://www.passportjs.org/docs/configure/
// //https://github.com/mikenicholson/passport-jwt
// export class JwtStrategy extends Strategy {
//   constructor(private readonly authService: AuthService) {
//     super(
//       {
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         passReqToCallback: true,
//         secretOrKey: 'secret',
//       },
//       async (req, payload, next) => await this.verify(req, payload, next)
//     );
//     passport.use('jwt', this);
//   }

//   public async verify(req, payload, done) {
//     const isValid = await this.authService.validateUser(payload);
//     if (!isValid) {
//       return done('Unauthorized', false);
//     }
//     done(null, payload);
//   }
// }