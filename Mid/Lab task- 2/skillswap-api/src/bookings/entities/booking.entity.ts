import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  exchangeRequestId: number;

  @Column()
  sessionDate: string;

  @Column()
  sessionMode: string;

  @Column({ default: 'confirmed' })
  status: string;
}