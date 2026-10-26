import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillDto {
  @IsString() @IsNotEmpty()
  title: string;

  @IsString() @IsNotEmpty()
  category: string;

  @IsString() @IsNotEmpty()
  description: string;

  @IsString() @IsNotEmpty()
  level: string;
}