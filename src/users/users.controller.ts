import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: { name: string; age: number; email: string }) {
    return this.usersService.createUser(body.name, body.age, body.email);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
