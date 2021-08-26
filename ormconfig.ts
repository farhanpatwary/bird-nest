import { Item } from 'src/entities/item/item.entity';
import { User } from 'src/controllers/user/entity/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// ORM DB connection
const entities = [User, Item];
export const ORMconfig: PostgresConnectionOptions = {
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
