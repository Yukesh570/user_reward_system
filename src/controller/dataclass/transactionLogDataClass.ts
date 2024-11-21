import { isBoolean,
    IsDefined,
    IsNumber,
    IsOptional,
    IsString,
    IsEmail,
    IsEnum,
    IsNotEmpty
} from 'class-validator'
import { Transform, Type } from "class-transformer";
import { TransactionType } from 'entity/enum/transactionType';

export class TransactionLogCreateBody{

@IsDefined()
@IsNotEmpty()
@IsString()
@IsEnum(TransactionType)
@Type(()=>String)
type:TransactionType

@IsDefined()
@IsNotEmpty()
@IsEmail()
@Type(()=>String)
email:string

@IsDefined()
@IsNotEmpty()
@IsNumber()
@Type(()=>Number)
Amount:string

@IsDefined()
@IsNotEmpty()
@IsNumber()
@Type(()=>Number)
userId:string

@IsDefined()
@IsNotEmpty()
@IsNumber()
@Type(()=>Number)
rewardId:string

@IsDefined()
@IsNotEmpty()
@IsNumber()
@Type(()=>Number)
userewardId:string



} 