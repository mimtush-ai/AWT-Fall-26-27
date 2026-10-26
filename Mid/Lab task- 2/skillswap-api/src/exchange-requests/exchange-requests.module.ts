import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeRequestsController } from './exchange-requests.controller';
import { ExchangeRequestsService } from './exchange-requests.service';
import { ExchangeRequest } from './entities/exchange-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeRequest])],
  controllers: [ExchangeRequestsController],
  providers: [ExchangeRequestsService],
})
export class ExchangeRequestsModule {}