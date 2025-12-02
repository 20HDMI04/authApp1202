import { IsEmail, IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator/types/decorator/common/IsNotEmpty';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  nickname: string;
}
