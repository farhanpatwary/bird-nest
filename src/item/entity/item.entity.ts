import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('increment')
  item_id: number;

  @Column()
  name: string;

  @Column({ type: 'numeric' })
  price: number;
}
