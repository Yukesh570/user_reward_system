import { Transform, Type } from "class-transformer";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class userDataClass {

    @IsDefined()
    @IsNotEmpty()    
    @IsString()
    @Type(()=>String)  
    @Transform(({value})=>(value ? value.toLowerCase():null),{toClassOnly:true}) 
    name: string;

    @IsDefined()
    @IsNotEmpty()    
    @IsString()
    @Type(()=>String)   
    password: string;

}