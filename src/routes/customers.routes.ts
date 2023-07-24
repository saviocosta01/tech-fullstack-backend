import { Router } from "express";
import { createCustomersController } from "../controllers/customers/createCustomersController";
import { validateBodyMiddleware } from "../middlewares/validatedBodyMiddleware";
import { customerRequestSchema, customerUpdateSchema } from "../schemas/customers.schema";
import { listCustomersController } from "../controllers/customers/listCustomersController";
import { updateCustomersController } from "../controllers/customers/updateCustomersController";
import { deleteCustomersController } from "../controllers/customers/deleteCustomersController";
import { tokenValidated } from "../middlewares/tokenValidatedMiddleware";



export const customerRoutes: Router = Router()

customerRoutes.post("", validateBodyMiddleware(customerRequestSchema), createCustomersController)
customerRoutes.get("", tokenValidated, listCustomersController)
customerRoutes.patch("",tokenValidated, validateBodyMiddleware(customerUpdateSchema), updateCustomersController)
customerRoutes.delete("", tokenValidated, deleteCustomersController)