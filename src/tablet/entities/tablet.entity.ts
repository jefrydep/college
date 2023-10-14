import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tablet')
export class Tablet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  tabletCode: string;

  @Column('text')
  tabletCode2: string;

  @Column('text')
  observations: string;

  @Column('text')
  customCode: string;
}
