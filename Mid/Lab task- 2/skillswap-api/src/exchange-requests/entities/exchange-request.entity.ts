import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exchange_requests')
export class ExchangeRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requesterName: string;

  @Column()
  skillOffered: string;

  @Column()
  skillWanted: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ default: 'pending' })
  status: string;
}