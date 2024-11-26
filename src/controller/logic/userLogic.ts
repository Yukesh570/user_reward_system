import { UserDao } from "../../dao/userDao";
import { autoInjectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { User } from "../../entity/user";
import { UserCreateBody, UserEditBody } from "../dataclass/rewardDataClass";
import { validateBodyInput } from "../helper/validate";


@autoInjectable()
export class UserController extends User {

  constructor(    
    private userDao:UserDao
   ) {
     super();
   }
/**
   @desc Create companyMemberReward
   @route POST /api/company/memberReward/create
   @access private
   **/

   create = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { validatedData: validBody, errors } = await validateBodyInput(req,UserCreateBody);
    if (errors) return res.status(400).json(errors);
    const companymemberreward = await this.userDao.create({
      ...validBody,
    });

    res.status(200).json({
      status: "Success",
      data: companymemberreward,
    });
  };


  edit=async(req: Request, res: Response, next: NextFunction):Promise<any>=>{

    const {validatedData:validBody,errors}=await validateBodyInput(req,UserEditBody)
  }
}


