import { Request, Response } from "express";
import { TCustomersList } from "../../interfaces/customers.interfaces";
import { listCustomersService } from "../../services/customers/listCustomers.service";


export const listCustomersController = async(req: Request, res: Response): Promise<Response> => {

    const listCustomers: TCustomersList = await listCustomersService();

    return res.status(200).json(listCustomers);
}