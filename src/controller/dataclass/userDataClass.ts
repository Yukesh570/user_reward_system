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
@MinLength(7)
@IsString()
@Type(() => String)
phone: string;


@IsDefined()
@IsNotEmpty()
@IsString()
@Type(()=>String)
location:string



} 

export class UserEditBody{

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
@MinLength(7)
@IsString()
@Type(() => String)
phone: string;


@IsDefined()
@IsNotEmpty()
@IsString()
@Type(()=>String)
location:string

        
        
        } 