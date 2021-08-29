import { Item } from 'src/item/entity/item.entity';
import { OrderItem } from 'src/order/entity/order-item.entity';
import { Order } from 'src/order/entity/order.entity';
import { User } from 'src/user/entity/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// ORM DB connection
const entities = [User, Item, Order, OrderItem];
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
