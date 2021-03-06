export class CreateOrderDto {
  user_id: string;
  items: OrderItemInterface[];
}

interface OrderItemInterface {
  item_id: number;
  quantity: number;
}
