import { Request, Response } from "express";
import { TContactsList } from "../../interfaces/contacts.interfaces";
import { myContactService } from "../../services/contacts/myContacts.service";




export const myContactsController = async(req: Request, res: Response): Promise<Response> => {

    const customerId: number = Number(res.locals.id)

    const myContacts= await myContactService(customerId);

    return res.status(200).json(myContacts);
}