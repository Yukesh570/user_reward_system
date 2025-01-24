
import { Router } from "express";
import { catchAsync } from "./helper/catchAsync";
import { UserController } from "../controller/logic/userLogic";



export function userRoute(): Router{
  //@ts-ignore

    const controller = new UserController();

    const router = Router();

    router.post(
        "/create",
        catchAsync(controller.create)
    )
    router.put(
        "/edit",
        catchAsync(controller.edit)
    )
return router
}