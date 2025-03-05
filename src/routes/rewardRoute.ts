import { Router } from "express";
import { catchAsync } from "./helper/catchAsync";
import { RewardController } from "../controller/logic/rewardLogic";
import { protect } from "../middleware/auth";

export function rewardRoute(): Router {
  //@ts-expect-error

  const controller = new RewardController();

  const router = Router();

  router.post(
    "/create",
    protect(),

    catchAsync(controller.create)
  );

  router.put(
    "/edit/:id",
    protect(),

    catchAsync(controller.edit)
  );

  router.delete("/delete/:id", protect(), catchAsync(controller.delete));

  return router;
}
