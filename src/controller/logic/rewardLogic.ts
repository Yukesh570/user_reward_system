import { RewardCreateBody, RewardEditBody } from "../dataclass/rewardDataClass";
import { Reward } from "../../entity/reward";
import { autoInjectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { RewardDao } from "../../dao/rewardDao";
// import { validateBodyInput } from "controller/helper/validate";
import { validateBodyInput } from "../helper/validate";



@autoInjectable()
export class RewardController extends Reward{
    constructor(
        private rewardDao:RewardDao

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
   @route put /api/reward/edit:id
   @access private
   **/
   edit = async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    const id=Number(req.params.id)
    const {validatedData:validBody,errors}=await validateBodyInput(req,RewardEditBody)
    if (errors)return res.status(400).json(errors);

    const reward= await this.rewardDao.update(
         id,
        {...validBody}
    )

    console.log(reward)

    res.status(200).json({
        status:"success",
        data:reward
    })

}

/**
   @desc Create reward
   @route delete /api/reward/delete:id
   @access private
   **/

   delete = async(req:Request,res:Response,next:NextFunction): Promise<any>=>{

    const id = Number(req.params.id)
    const reward=await this.rewardDao.delete(id)
    console.log(reward)
    if (!reward.affected) return res.status(400).json("Data not found");
    res.status(200).json({
        status:"Success"
    })
   }


   /**
   @desc Create reward
   @route get /api/reward/getByPanel
   @access private
   **/

   getbypanel = async(req:Request,res:Response,next:NextFunction): Promise<any>=>{

    const query=req.query
    // console.log(reward)
    // if (!reward.affected) return res.status(400).json("Data not found");
    // res.status(200).json({
    //     status:"Success"
    // })
   }



}   
