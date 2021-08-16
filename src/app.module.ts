import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMconfig } from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { User } from './entities/user/user.entity';
import { UserModule } from './entities/user/user.module';
import { UserService } from './entities/user/user.service';
import { ItemModule } from './entities/item/item.module';
import { Item } from './entities/item/item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORMconfig),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Item]),
    UserModule,
    ItemModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
