import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMconfig } from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { User } from './controllers/user/entity/user.entity';
import { UserModule } from './controllers/user/user.module';
import { ItemModule } from './controllers/item/item.module';
import { Item } from './controllers/item/entity/item.entity';
import { ItemController } from './controllers/item/item.controller';
import { ItemService } from './controllers/item/item.service';
import { UserService } from './controllers/user/user.service';

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
