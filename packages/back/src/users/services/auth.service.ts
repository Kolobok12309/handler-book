import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { promisify } from 'util';

import { UsersService } from '../services';
import { UserDto, SignInDto } from '../dto';

const asyncHash = promisify(hash);
const asyncCompare = promisify(compare);

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser({ login, password: inPassword }): Promise<UserDto | null> {
    try {
      const user = await this.usersService.findByLogin(login);

      const isPassRight = await asyncCompare(inPassword, user.password);

      if (isPassRight) {
        const { password, ...result } = user;

        return result;
      }

      return null;
    } catch (err) {
      return null;
    }
  }
}
