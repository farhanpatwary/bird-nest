// dotenv needs to be imported before anything, db connection will fail otherwise
import * as dotenv from 'dotenv';
dotenv.config();

// Other imports
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from './entities/user/user.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
