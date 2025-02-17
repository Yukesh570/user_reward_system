import { plainToInstance } from "class-transformer";
import { RewardLogCreateBody } from "../dataclass/rewardLogDataClass";
import { RewardLogDao } from "../../dao/rewardLogDao";
import { prizeType } from "../../entity/enum/prizeType";
import { RewardLog } from "../../entity/rewardLog";
import { NextFunction, Request, Response } from "express";
import { Moment } from "moment";
import { autoInjectable } from "tsyringe";
import { UserDao } from "../../dao/userDao";
import { validateBodyInput } from "../helper/validate";
import { TransactionLog } from "../../entity/transactionLog";
import { TransactionLogDao } from "../../dao/transactionLogDao";
import { TransactionLogCreateBody } from "../dataclass/transactionLogDataClass";


@autoInjectable()
export class TransactionController extends TransactionLog{
    constructor(
        private transactionLogDao:TransactionLogDao,
        private userDao:UserDao
        
    ){
        super();
    }
/**
   @desc Create reward
   @route POST /api/reward/create
   @access private  
   **/

create = async(req:Request,res:Response,next:NextFunction):Promise<any>=>{

    const { validatedData: validBody, errors }=await validateBodyInput(req,TransactionLogCreateBody)
    const data = await plainToInstance(TransactionLogCreateBody,req.body)
    const log= await this.transactionLogDao.create({...data})
        return res.status(200).json({
        status: "Success",
        data:log    
        });
}
}

