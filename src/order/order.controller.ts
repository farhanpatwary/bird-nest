import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/all')
  createNewOrder(@Body() body: CreateOrderDto) {
    return this.orderService.createNewOrder(body);
  }
}
