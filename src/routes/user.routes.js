import { Router } from "express";
import { create } from "../controllers/user.controller.js";
import { getAll } from "../controllers/user.controller.js";
const userRouter = Router();

userRouter.post("/user", create); 
userRouter.get("/user",getAll);

export default userRouter;
