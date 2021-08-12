import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/entities/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}
  @Get('/users')
  getAllUsers() {
    return [];
  }
}
