import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: User) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.users();
  }

  @Get(':id')
  findOne(@Param('id') id: Prisma.UserWhereUniqueInput) {
    return this.usersService.user(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUser: User) {
    return this.usersService.updateUser({
      where: { id: +id },
      data: updateUser,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.UserWhereUniqueInput) {
    return this.usersService.deleteUser(id);
  }
}
