import { Request, Response } from "express";
import { deleteContactService } from "../../services/contacts/deleteContacts.service";


export const deleteContactsController = async(req: Request, res: Response): Promise<Response> => {

    const id: number = Number(req.params.id);
    
    await deleteContactService(id);

    return res.status(204).send();
}