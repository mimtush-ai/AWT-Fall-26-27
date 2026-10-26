import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsInt() @IsNotEmpty()
  exchangeRequestId: number;

  @IsString() @IsNotEmpty()
  sessionDate: string;

  @IsString() @IsNotEmpty()
  sessionMode: string;
}