import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderItem } from './entity/order-item.entity';
import { Order } from './entity/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    private userService: UserService,
  ) {}

  async createNewOrder(order: CreateOrderDto) {
    const orderItems: OrderItem[] = [];
    order.items.forEach((orderItem) => {
      const OrderItemObject = new OrderItem();
      OrderItemObject.item_id = orderItem.item_id;
      OrderItemObject.quantity = orderItem.quantity;
      orderItems.push(OrderItemObject);
    });
    const newOrder = new Order();
    newOrder.items = orderItems;
    newOrder.user = await this.userService.getById(order.user_id);
    return await this.orderRepository.save(newOrder);
  }
}
