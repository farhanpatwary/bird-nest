import { Controller, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
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

  @Put('/:id')
  async updateUserById(
    @Param('id') id: number,
    @Req() request,
    @Res() response,
  ) {
    try {
      const user = await this._userService.updateUser(id, request.body.user);
      response.status(200).send(user);
    } catch (e) {
      response.status(500).send();
    }
  }

  @Post()
  async createNewUser(@Req() request, @Res() response) {
    try {
      const user = await this._userService.createNew(request.body.user);
      response.status(200).send(user);
    } catch (e) {
      response.status(500).send();
    }
  }
}
