import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity({ name: 'order_items' })
export class OrderItem {
  @PrimaryGeneratedColumn('increment')
  order_item_id: number;

  // @Column()
  // order_id: number;

  @ManyToOne(() => Order, (order) => order.items)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column()
  item_id: number;

  @Column()
  quantity: string;
}
