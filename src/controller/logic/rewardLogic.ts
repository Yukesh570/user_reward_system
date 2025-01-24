import { RewardCreateBody } from "../dataclass/rewardDataClass";
import { Reward } from "../../entity/reward";
import { autoInjectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { RewardDao } from "../../dao/rewardDao";
// import { validateBodyInput } from "controller/helper/validate";
import { validateBodyInput } from "../helper/validate";



@autoInjectable()
export class RewardController extends Reward{
    constructor(
        public rewardDao:RewardDao

    ){
        super()
    }
/**
   @desc Create reward
   @route POST /api/reward/create
   @access private
   **/
create = async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    const {validatedData:validBody,errors}=await validateBodyInput(req,RewardCreateBody)
    if (errors)return res.status(400).json(errors);

    const reward= await this.rewardDao.create({
        ...validBody

    }
    )

    res.status(200).json({
        status:"success",
        data:reward
    })

}
/**
   @desc Create reward
   @route POST /api/reward/create
   @access private
   **/
   edit = async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    const {validatedData:validBody,errors}=await validateBodyInput(req,RewardCreateBody)
    if (errors)return res.status(400).json(errors);

    const reward= await this.rewardDao.create({
        ...validBody
    }
    )

    res.status(200).json({
        status:"success",
        data:reward
    })

}

}   
