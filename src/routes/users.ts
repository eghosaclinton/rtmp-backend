import { Users } from "../controllers/users";
import { Router } from "express";

const controllers = new Users()
const userRouter = Router()

userRouter.get("/hellouser", controllers.helloUser)


export default userRouter