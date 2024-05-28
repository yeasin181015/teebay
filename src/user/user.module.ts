import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UserResolver],
  exports: [UsersService],
})
export class UserModule {}
