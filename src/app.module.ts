import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { DatabaseService } from './providers/database/database.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
