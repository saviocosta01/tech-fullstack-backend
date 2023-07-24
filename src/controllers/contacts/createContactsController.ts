import { Request, Response } from "express";
import { TContacts, TContactsRequest } from "../../interfaces/contacts.interfaces";
import { createContactService } from "../../services/contacts/createContacts.service";


export const createContactsController = async(req: Request, res: Response): Promise<Response> => {

    const customerId: number = Number(res.locals.id);

    const data: TContactsRequest = req.body;

    const newContact: TContacts = await createContactService(data, customerId);

    return res.status(201).json(newContact);
}