import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import {
  UserCreateDataClass,
  UserDataClass,
} from "controller/dataclass/auth/loginDataclass";
import { LoginDao } from "dao/auth/loginDao";
import { NextFunction, Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import {
  comparePassword,
  hashPassword,
  verifyJwt,
  verifyToken,
} from "auth/login";
import { generateToken } from "auth/login";
import { loginJwt } from "utils/jwt/interface";

@autoInjectable()
export class LoginLogic {
  constructor(private loginDao: LoginDao) {}

  /**
 @desc Create user
  @route  api/auth/register/
  @access private
  **/
  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const validBody = plainToInstance(UserCreateDataClass, req.body);
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

    const check = await this.loginDao.repository.findOne({
      where: { username: validBody.username, userType: validBody.userType },
    });
    if (check) {
      return res.status(400).json({
        message: "username already exist",
      });
    }
    const hashpass = await hashPassword(password);

    const data = await this.loginDao.create({
      ...validBody,
      password: hashpass,
    });
    delete data.password;
    return res.status(200).json({
      status: "success",
      data: data,
    });
  };

  /**
 @desc login user
  @route  api/auth/login/
  @access private
  **/
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
        userId: check.id,
        username: check.username,
        userType: check.userType,
      },
      "1d"
    );
    await verifyToken<loginJwt>(token)
      .then((jwtPayload) => {
        console.log("User ID:", jwtPayload.userId);
      })
      .catch((error) => {
        console.error("Error verifying token:", error.message);
      });
    return res.status(200).json({
      status: "success",
      token: token,
    });
  };
}
