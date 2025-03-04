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
import { TransactionType } from "entity/enum/transactionType";

export class TransactionLogCreateBody {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEnum(TransactionType)
  @Type(() => String)
  transactionType: TransactionType;

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @Type(() => String)
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  amount: number;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  userId: number;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  rewardId: number;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  rewardLogId: number;
}
