import { Router } from "express";
import { catchAsync } from "./helper/catchAsync";
import { RewardLogController } from "../controller/logic/rewardLogLogic";
import { protect } from "../middleware/auth";

export function rewardLogRoute(): Router {
  //@ts-ignore

  const controller = new RewardLogController();
  const router = Router();

  router.post(
    "/create",
    protect(),

    catchAsync(controller.create)
  );

  return router;
}
