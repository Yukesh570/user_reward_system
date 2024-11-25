import { UserDao } from "dao/userDao";
import { User } from "entity/user";
import { autoInjectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { UserCreateBody } from "controller/dataclass/rewardDataClass";
import { validateBodyInput } from "controller/helper/validate";


@autoInjectable()
export class UserController extends User {
    
    private userDao:UserDao
    
/**
   @desc Create companyMemberReward
   @route POST /api/company/memberReward/create
   @access private
   **/

   create = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { validatedData: validBody, errors } = await validateBodyInput(req, UserCreateBody);

    if (errors) return res.status(400).json(errors);
    const companymemberreward = await this.userDao.create({
      ...validBody,
    });

    res.status(200).json({
      status: "Success",
      data: companymemberreward,
    });
  };
}


