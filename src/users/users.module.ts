import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [PrismaService, UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
