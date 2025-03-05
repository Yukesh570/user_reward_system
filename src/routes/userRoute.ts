import { Router } from "express";
import { catchAsync } from "./helper/catchAsync";
import { UserController } from "../controller/logic/userLogic";
import { protect } from "../middleware/auth";

export function userRoute(): Router {
  //@ts-ignore

  const controller = new UserController();

  const router = Router();

  router.post("/create", protect(), catchAsync(controller.create));
  router.put("/edit", protect(), catchAsync(controller.edit));
  return router;
}
