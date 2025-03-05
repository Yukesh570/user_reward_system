import {
  isBoolean,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  MinLength,
} from "class-validator";
import { Transform, Type } from "class-transformer";
import { criteriaType } from "../../entity/enum/rewardType";
import { prizeType } from "../../entity/enum/prizeType";

export class RewardCreateBody {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  reward: string;

  @IsDefined()
  @IsNotEmpty()
  @IsEnum(criteriaType)
  @Type(() => String)
  criteriaType: criteriaType;

  @IsDefined()
  @IsNotEmpty()
  @IsEnum(prizeType)
  @Type(() => String)
  prizeType: prizeType;
}

export class RewardEditBody {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  reward: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(criteriaType)
  @Type(() => String)
  criteriaType: criteriaType;

  @IsDefined()
  @IsNotEmpty()
  @IsEnum(prizeType)
  @Type(() => String)
  prizeType: prizeType;
}
