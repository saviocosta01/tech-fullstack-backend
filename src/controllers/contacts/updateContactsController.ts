import { Request, Response } from "express";
import { TContactsUpdate } from "../../interfaces/contacts.interfaces";
import { updateContactService } from "../../services/contacts/updateContacts.service";


export const updateContactsController = async(req: Request, res: Response): Promise<Response> => {

    const data: TContactsUpdate = req.body;

    const id: number = Number(req.params.id);

    const updateContact: TContactsUpdate = await updateContactService(id, data);

    return res.status(200).json(updateContact);
}