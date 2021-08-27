import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMconfig } from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { Item } from './item/entity/item.entity';
import { ItemController } from './item/item.controller';
import { ItemModule } from './item/item.module';
import { ItemService } from './item/item.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORMconfig),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Item]),
    UserModule,
    ItemModule,
  ],
  controllers: [AppController, UserController, ItemController],
  providers: [AppService, UserService, ItemService],
})
export class AppModule {}
