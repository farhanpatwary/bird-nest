import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from './entities/user/user.entity';

async function bootstrap() {
  dotenv.config();

  // ORM DB connection
  const entities = [User];
  const PostgresDBConfig: PostgresConnectionOptions = {
    type: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    ssl: process.env.DB_SSL === 'true' ? true : false,
    synchronize: true,
    entities: entities,
  };
  console.log(PostgresDBConfig);
  try {
    const connection = await createConnection(PostgresDBConfig);
  } catch (e) {
    console.log('An error occurred', e);
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
