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
import { rewardType } from 'entity/enum/rewardType';

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
Amount: number;

@IsDefined()
@IsNotEmpty()
@IsNumber()
@Type(() => Number)
userId: number;





} 



export class RewardEditBody{

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Type(()=>String)
    name:string
    
    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    @Type(()=>String)
    email:string
    
    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    @Type(()=>Number)
    phone:number
    
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Type(()=>String)
    location:string
    
    
    
    } 