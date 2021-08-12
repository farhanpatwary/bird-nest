import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { request } from 'express';
import { User } from 'src/entities/user/user.entity';
import { UserService } from 'src/entities/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('/all')
  getAllUsers() {
    return this._userService.getAll();
  }

  @Get('/:id')
  getUserById(@Param('id') id: number) {
    return this._userService.getById(id);
  }

  @Post('')
  createNewUser(@Req() request, @Res() response) {
    const user = request.body.user;
    console.log(user);
    return this._userService.createNew(user);
  }
}
