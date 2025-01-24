import { isBoolean,
    IsDefined,
    IsNumber,
    IsOptional,
    IsString,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    MinLength
} from 'class-validator'
import { Transform, Type } from "class-transformer";
import { rewardType } from "../../entity/enum/rewardType"
// import { rewardType } from "controller/entity/enum/rewardType";

export class RewardCreateBody{

@IsDefined()
@IsNotEmpty()
@IsString()
@Type(()=>String)
reward:string

@IsDefined()
@IsNotEmpty()
@IsEmail()
@Type(()=>String)
email:string

@IsDefined()
@IsNotEmpty()
@IsEnum(rewardType)
@Type(()=>String)
rewardType:rewardType

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





} 



export class RewardEditBody{

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Type(()=>String)
    reward:string
    
    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    @Type(()=>String)
    email:string
    
    @IsOptional()
    @IsNotEmpty()
    @IsEnum(rewardType)
    @Type(()=>String)
    rewardType:rewardType
    
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    amount: number;
    
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    userId: number;
    
    
    } 