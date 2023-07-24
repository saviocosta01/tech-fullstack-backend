import { Router } from "express";
import { loginCustomersControllers } from "../controllers/login/loginCustomersController";



export const loginRouter: Router = Router()

loginRouter.post("", loginCustomersControllers)