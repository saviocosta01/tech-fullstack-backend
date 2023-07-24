import { Router } from "express";
import { createContactsController } from "../controllers/contacts/createContactsController";
import { listContactsController } from "../controllers/contacts/listContactsController";
import { updateContactsController } from "../controllers/contacts/updateContactsController";
import { deleteContactsController } from "../controllers/contacts/deleteContactsController";
import { tokenValidated } from "../middlewares/tokenValidatedMiddleware";
import { myContactsController } from "../controllers/contacts/myContactsController";
import { contactOwnerMiddleware } from "../middlewares/contacts/ContactOwnerMiddleware";
import { validateBodyMiddleware } from "../middlewares/validatedBodyMiddleware";
import { contactSchemaRequest, contactUpdateSchema } from "../schemas/contacts.schema";



export const contactRoutes: Router = Router()

contactRoutes.post("", tokenValidated, validateBodyMiddleware(contactSchemaRequest), createContactsController)
contactRoutes.get("", tokenValidated, listContactsController)
contactRoutes.patch("/:id", tokenValidated, validateBodyMiddleware(contactUpdateSchema),contactOwnerMiddleware, updateContactsController)
contactRoutes.delete("/:id", tokenValidated, contactOwnerMiddleware, deleteContactsController)

contactRoutes.get("/mycontacts", tokenValidated, myContactsController)