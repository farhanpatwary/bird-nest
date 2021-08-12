import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/entities/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}
  @Get('/all')
  getAllUsers() {
    return [];
  }
}
