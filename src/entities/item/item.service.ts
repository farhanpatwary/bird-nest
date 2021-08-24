import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  getAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async getById(id: number): Promise<Item> {
    try {
      const user = this.itemRepository.findOneOrFail({ item_id: id });
      return user;
    } catch (e) {
      console.log(`Failed to find user with id: ${id}`);
      return e;
    }
  }

  createNew(item: Item): Promise<Item> {
    const newItem = this.itemRepository.create({ ...item });
    return this.itemRepository.save(newItem);
  }

  async updateItem(id: number, itemUpdates: Partial<Item>) {
    const item = await this.getById(id);
    Object.keys(item).forEach((property) => {
      if (itemUpdates[property]) {
        item[property] = itemUpdates[property];
      }
    });
    return this.itemRepository.save(item);
  }
}
