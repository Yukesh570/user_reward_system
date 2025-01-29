import { ClassType } from "class-transformer-validator";
import { ObjectLiteral } from "typeorm";



export class QueryFilter<Entity extends ObjectLiteral >{
    public entity!:ClassType<Entity>

}