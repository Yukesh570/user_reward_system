import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { UserDataClass } from "controller/dataclass/auth/loginDataclass";
import { LoginDao } from "dao/auth/loginDao";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import { comparePassword, hashPassword, verifyToken } from "auth/login";
import { generateToken } from "auth/login";

@autoInjectable()
export class LoginLogic {
  constructor(private loginDao: LoginDao) {}

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const validBody = plainToInstance(UserDataClass, req.body);
    const errors = await validate(validBody);
    if (errors.length > 0) {
      return res.status(400).json({
        errors,
        message: "data format was wrong",
      });
    }
    const { password } = validBody;
    if (password.length < 8) {
      return res.status(400).json({
        message: "password must be atleast 8 characters",
      });
    }

    console.log("password", password);
    const check = await this.loginDao.repository.findOne({
      where: { username: validBody.username },
    });
    if (check) {
      return res.status(400).json({
        message: "username already exist",
      });
    }
    const hashpass = await hashPassword(password);
    console.log("hashpass", hashPassword);

    const data = await this.loginDao.create({
      ...validBody,
      password: hashpass,
    });
    return res.status(200).json({
      status: "success",
    });
  };

  login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const validBody = plainToInstance(UserDataClass, req.body);
    const error = await validate(validBody);
    if (error.length > 0) {
      return res.status(400).json({
        error,
        message: "data format was wrong",
      });
    }
    const { password } = validBody;
    const check = await this.loginDao.repository.findOne({
      where: { username: validBody.username },
    });
    if (!check) {
      return res.status(400).json({
        message: "username does not exist",
      });
    }

    const data = await comparePassword(password, check.password);
    if (!data) {
      return res.status(400).json({
        message: "password is incorrect",
      });
    }
    const token = generateToken(
      {
        id: check.id,
        username: check.username,
      },
      "1d"
    );
    const verify= verifyToken(token)
    return res.status(200).json({
      status: "success",
      token: token,
      verify:verify
    });
  };
}
