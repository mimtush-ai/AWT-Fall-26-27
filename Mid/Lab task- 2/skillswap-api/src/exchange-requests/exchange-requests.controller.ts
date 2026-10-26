import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExchangeRequestsService } from './exchange-requests.service';
import { CreateExchangeRequestDto } from './dto/create-exchange-request.dto';

@Controller('exchange-requests')
export class ExchangeRequestsController {
  constructor(private readonly service: ExchangeRequestsService) {}

  @Post()
  create(@Body() dto: CreateExchangeRequestDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}