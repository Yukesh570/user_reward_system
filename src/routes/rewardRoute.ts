import { Router } from "express";
import { catchAsync } from "./helper/catchAsync";
import { RewardController } from "../controller/logic/rewardLogic";



export function rewardRoute(): Router{
  //@ts-expect-error

    const controller = new RewardController();

    const router = Router();

    router.post(
        "/create",
        catchAsync(controller.create)
    )

    router.put(
      "/edit/:id",
      catchAsync(controller.edit)
    )

    router.delete(
      "/delete/:id",
      catchAsync(controller.delete)
    )


return router
}