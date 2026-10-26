import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExchangeRequestDto {
  @IsString() @IsNotEmpty()
  requesterName: string;

  @IsString() @IsNotEmpty()
  skillOffered: string;

  @IsString() @IsNotEmpty()
  skillWanted: string;

  @IsString() @IsNotEmpty()
  message: string;
}