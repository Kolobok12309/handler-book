import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { RefreshTokenPayload } from '@hb/types';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt_refresh',
) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET', 'my_jwt_secret'),
    });
  }

  async validate({ type, ...other }: RefreshTokenPayload) {
    if (type !== 'refresh') throw new UnauthorizedException();

    return { ...other };
  }
}
