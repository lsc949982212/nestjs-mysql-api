import { IsNotEmpty, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty()
  @IsString({ message: '姓名不不是字符串' })
  @IsNotEmpty({ message: '姓名不能为空' })
  readonly name: string;

  @ApiModelProperty()
  @IsString({ message: '密码是字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
}