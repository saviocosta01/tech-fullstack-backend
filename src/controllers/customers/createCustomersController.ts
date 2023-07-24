import { Request, Response } from "express";
import { TCustomerResponse, TCustomers, TCustomersRequest } from "../../interfaces/customers.interfaces";
import { createCustomersService } from "../../services/customers/createCustomers.service";


export const createCustomersController = async(req: Request, res: Response): Promise<Response> => {
    const data: TCustomersRequest = req.body;

    const newCustomer: TCustomerResponse = await createCustomersService(data);

    return res.status(201).json(newCustomer);
}