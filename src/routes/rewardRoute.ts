import { UserController } from "controller/logic/userLogic";
import { RewardLog } from "entity/rewardLog";
import { Router } from "express";
import { catchAsync } from "./helper/catchAsync";
import { RewardController } from "../controller/logic/rewardLogic";



export function rewardRoute(): Router{
  //@ts-ignore

    const controller = new RewardController();

    const router = Router();

    router.post(
        "/create",
        catchAsync(controller.create)
    )

return router
}