import { verifyJwt, verifyToken } from "../auth/login";
import { AppDataSource } from "../data-source";
import { Login } from "../entity/auth/login";
import { User } from "../entity/user";
import { Request, Response, NextFunction } from "express";
import { loginJwt } from "../utils/jwt/interface";

export async function getuser(userId: number) {
  return await AppDataSource.getRepository(Login).findOne({
    where: { id: userId },
  });
}

export function protect() {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      if (!token) {
        res.status(400).json({ message: "token not provided" });
        return;
      }
      const data = await verifyToken<loginJwt>(token);

      const userdata = await getuser(data.userId);
      if (!userdata) {
        res.status(401).json({ message: "User not found" });
        return;
      }
      req.user = userdata;
      next();
    } catch (e: any) {
      let errormessage: string = "Invalid token";
      switch (e.name) {
        case "TokenExpiredError":
          errormessage = "Token expired";
          break;

        case "JsonWebTokenError":
          errormessage = "Invalid token";
          break;
        case "NotBeforeError":
          errormessage = "Token not active";
          break;
      }
      res.status(401).json({ message: errormessage });
    }
  };
}
