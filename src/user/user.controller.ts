import { Controller, Get } from '@nestjs/common';
import { USERS_LIST_MOCK } from './mocks/user.mocks';

@Controller('user')
export class UserController {
  @Get('/users')
  getAllUsers() {
    return USERS_LIST_MOCK;
  }
}
