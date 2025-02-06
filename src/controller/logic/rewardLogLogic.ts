import { plainToInstance } from "class-transformer";
import { RewardLogCreateBody } from "controller/dataclass/rewardLogDataClass";
import { RewardLogDao } from "dao/rewardLogDao";
import { prizeType } from "entity/enum/prizeType";
import { RewardLog } from "entity/rewardLog";
import { NextFunction, Request, Response } from "express";
import { Moment } from "moment";
import { autoInjectable } from "tsyringe";



type rewardlog ={
    id:number;
    name:string;
    email:string;
    phone:number;
    prizeType: prizeType;
    createdAt?: Moment;
    meterReadingDate?: Date;
    paymentDate?: Date;
    updatedAt?: Moment;



}

@autoInjectable()
export class RewardLogController{
    constructor(
        public rewardLogDao=RewardLogDao
    )
    {


    }


    create = async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
        // const reward: rewardlog = {
        //     id: 1,  // Example data, replace with actual values from `req.body`
        //     name: req.body.name,
        //     email: req.body.email,
        //     phone: req.body.phone,
        //     prizeType: req.body.prizeType, 
        //     meterReadingDate: new Date(),
        //     paymentDate: new Date(),
        // };
        const data= plainToInstance(RewardLogCreateBody,req.body)
        console.log("====",data)
        console.log("++++",req.body)

         return res.status(200).json({
            status: "Success",
            
          });
    }
}