import { Router } from "express";
import { registerUserController } from "../controllers/user.controller.js"; // ✅ include `.js` extension

const userRouter = Router(); // ✅ spelling fixed

userRouter.post('/register', registerUserController);

export default userRouter;
