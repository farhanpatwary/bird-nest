import { User } from 'src/entities/user/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// ORM DB connection
const entities = [User];
export const config: PostgresConnectionOptions = {
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
