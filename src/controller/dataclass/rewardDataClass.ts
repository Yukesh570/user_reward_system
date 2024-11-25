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

export class UserCreateBody{

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