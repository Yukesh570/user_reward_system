import { LoginLogic } from "../../controller/logic/auth/loginLogic";
import { Router } from "express";
import { catchAsync } from "../../routes/helper/catchAsync";

export function authRoute(): Router {
  //@ts-ignore
  const controller = new LoginLogic();
  const router = Router();

  router.post("/login", catchAsync(controller.login));

  router.post("/register", catchAsync(controller.create));

  return router;
}
