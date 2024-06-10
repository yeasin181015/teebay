import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { generateHashedPassword } from 'src/utils/password';
import * as bcrypt from 'bcrypt';
import {
  InvalidCredentialsException,
  UserNotFound,
} from 'src/exceptions/authentication';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany({});
    return users;
  }

  async create(userData: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    if (user) throw new HttpException('Email already exists!', 409);

    const hashedPassword = await generateHashedPassword(userData.password);

    const { password, ...credentials } = userData;

    const data = { password: hashedPassword, ...credentials };

    return this.prisma.user.create({ data });
  }

  async login(data: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) throw new UserNotFound();

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) throw new InvalidCredentialsException();

    const { password, ...userCredentials } = user;

    const token = await this.jwtService.signAsync(userCredentials);

    return {
      ...userCredentials,
      access_token: token,
    };
  }
}
