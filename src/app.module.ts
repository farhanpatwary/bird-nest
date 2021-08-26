import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMconfig } from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { User } from './controllers/user/entity/user.entity';
import { UserModule } from './controllers/user/entity/user.module';
import { UserService } from './controllers/user/entity/user.service';
import { ItemModule } from './entities/item/item.module';
import { Item } from './entities/item/item.entity';
import { ItemController } from './controllers/item/item.controller';
import { ItemService } from './entities/item/item.service';

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
