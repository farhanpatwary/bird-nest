import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrderController {
  @Post('/')
  createNewOrder(@Body() body: CreateOrderDto) {
    console.log(body);
  }
}
