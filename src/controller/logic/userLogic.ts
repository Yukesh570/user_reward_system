import { UserDao } from "../../dao/userDao";
import { autoInjectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { User } from "../../entity/user";
import { validateBodyInput, validateNumericParam } from "../helper/validate";
import { UserCreateBody, UserEditBody } from "../dataclass/userDataClass";

@autoInjectable()
export class UserController {
  constructor(private userDao: UserDao) {}
  /**
   @route POST /api/user/create
   @access private
   **/

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { validatedData: validBody, errors } = await validateBodyInput(
      req,
      UserCreateBody
    );
    if (errors) return res.status(400).json(errors);
    const companymemberreward = await this.userDao.create({
      ...validBody,
    });

    res.status(200).json({
      status: "Success",
      data: companymemberreward,
    });
  };

  /**
   @desc Create user
   @route POST /api/user/create
   @access private
   **/

  edit = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { validatedData: validBody, errors } = await validateBodyInput(
      req,
      UserEditBody
    );
    const id = validateNumericParam(req, "id");
    const results = await this.userDao.updateAndReturn(id, { ...validBody });
    if (!results) return res.status(400).json(errors);

    res.status(200).json({
      status: "Success",
      ...results,
    });
  };
}
