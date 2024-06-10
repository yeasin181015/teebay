import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super();
  }

  async validate(payload: any) {
    console.log('Local Stategy', payload);

    const user = await this.userService.login({
      email: payload.email,
      password: payload.password,
    });

    if (!user) throw new NotFoundException();

    return user;
  }
}
