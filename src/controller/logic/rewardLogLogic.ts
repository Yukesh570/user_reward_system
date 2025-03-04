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

@autoInjectable()
export class RewardLogController {
  constructor(private rewardLogDao: RewardLogDao, private userDao: UserDao) {}
  /**
   @desc Create reward
   @route POST /api/reward/create
   @access private  
   **/

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { validatedData: validBody, errors } = await validateBodyInput(
      req,
      RewardLogCreateBody
    );
    const data = await plainToInstance(RewardLogCreateBody, req.body);
    const log = await this.rewardLogDao.create({ ...data });
    return res.status(200).json({
      status: "Success",
      data: log,
      user: req.user.username,
      id: req.user.id,
      userType: req.user.userType,
    });
  };
}
