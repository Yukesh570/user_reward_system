import { Router } from "express";
import { catchAsync } from "./helper/catchAsync";
import { RewardLogController } from "../controller/logic/rewardLogLogic";




export function rewardLogRoute(): Router{
  //@ts-ignore

    const controller = new RewardLogController();
    const router = Router();

    router.post(
        "/create",
        catchAsync(controller.create)
    )

return router
}