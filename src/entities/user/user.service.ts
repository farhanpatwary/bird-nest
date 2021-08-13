import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getById(id: number): Promise<User> {
    try {
      const user = this.userRepository.findOneOrFail({ id });
      return user;
    } catch (e) {
      console.log(`Failed to find user with id: ${id}`);
      return e;
    }
  }

  createNew(user: User): Promise<User> {
    const newUser = this.userRepository.create({ ...user });
    return this.userRepository.save(newUser);
  }

  async updateUser(id: number, userUpdates: Partial<User>) {
    const user = await this.getById(id);
    Object.keys(user).forEach((property) => {
      if (userUpdates[property]) {
        user[property] = userUpdates[property];
      }
    });
    return this.userRepository.save(user);
  }
}
