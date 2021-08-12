import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConnectionConfig } from 'pg';

async function bootstrap() {
  dotenv.config();
  const DBConfig: ConnectionConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    ssl: Boolean(process.env.DB_SSL),
  };
  console.log(DBConfig);

  console.log(process.env);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
