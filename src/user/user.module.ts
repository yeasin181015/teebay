import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    }),
  ],
  providers: [UsersService, UserResolver],
  exports: [UsersService],
})
export class UserModule {}
