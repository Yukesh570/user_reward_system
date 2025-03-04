import {
  isBoolean,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
} from "class-validator";
import { Transform, Type } from "class-transformer";
import { prizeType } from "../../entity/enum/prizeType";

export class RewardLogCreateBody {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @Type(() => String)
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  phone: number;
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  rewardId: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEnum(prizeType)
  @Type(() => String)
  prizeType: prizeType;
}
