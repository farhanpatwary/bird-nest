import { Controller, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ItemService } from './item.service';

@ApiTags('Items')
@Controller('items')
export class ItemController {
  constructor(private _itemService: ItemService) {}

  @Get('/all')
  getAllItems() {
    return this._itemService.getAll();
  }

  @Post()
  async createNewItem(@Req() request, @Res() response) {
    try {
      const item = await this._itemService.createNew(request.body.item);
      response.status(200).send(item);
    } catch (e) {
      console.error(e);
      response.status(500).send();
    }
  }

  @Put('/:id')
  async updateItemById(
    @Param('id') id: number,
    @Req() request,
    @Res() response,
  ) {
    try {
      const item = await this._itemService.updateItem(id, request.body.item);
      response.status(200).send(item);
    } catch (e) {
      response.status(500).send();
    }
  }
}
