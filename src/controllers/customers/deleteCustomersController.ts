import { Request, Response } from "express";
import { deleteCustomersService } from "../../services/customers/deleteCustomers.service";

export const deleteCustomersController = async(req: Request, res: Response): Promise<Response> => {
    const id: number = Number(res.locals.id);

    await deleteCustomersService(id);

    return res.status(204).send();
}