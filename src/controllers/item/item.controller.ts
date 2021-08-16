import { Controller, Get } from '@nestjs/common';
import { ItemService } from 'src/entities/item/item.service';

@Controller('items')
export class ItemController {
  constructor(private _itemService: ItemService) {}

  @Get('/all')
  getAllItems() {
    return this._itemService.getAll();
  }
}
