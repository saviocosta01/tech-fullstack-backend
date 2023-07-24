import { Request, Response } from "express";
import { TContactsList } from "../../interfaces/contacts.interfaces";
import { listContactService } from "../../services/contacts/listContacts.service";




export const listContactsController = async(req: Request, res: Response): Promise<Response> => {

    const listContacts: TContactsList = await listContactService();

    return res.status(200).json(listContacts);
}