import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from './entities/user/user.entity';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
