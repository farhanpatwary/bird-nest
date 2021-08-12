import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './controllers/user/user.service';

@Module({
  imports: [UserService],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
