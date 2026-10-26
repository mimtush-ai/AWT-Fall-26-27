import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeRequest } from './entities/exchange-request.entity';
import { CreateExchangeRequestDto } from './dto/create-exchange-request.dto';

@Injectable()
export class ExchangeRequestsService {
  constructor(
    @InjectRepository(ExchangeRequest) private readonly repo: Repository<ExchangeRequest>,
  ) {}

  create(dto: CreateExchangeRequestDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({ order: { id: 'ASC' } });
  }
}