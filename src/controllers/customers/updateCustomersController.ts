import { TCustomersUpdate } from "../../interfaces/customers.interfaces";
import { Request, Response } from "express";
import { updateCustomersService } from "../../services/customers/updateCustomers.service";


export const updateCustomersController = async(req: Request, res: Response): Promise<Response> => {

    const id: number = Number(res.locals.id);

    const data: TCustomersUpdate = req.body;

    const updateCustomers: TCustomersUpdate = await updateCustomersService(id, data);

    return res.status(200).json(updateCustomers);
}