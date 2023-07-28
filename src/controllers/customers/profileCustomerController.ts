import { Request, Response } from "express";
import { profileCustomerService } from "../../services/customers/profileCustomer.service";
import { TCustomerResponse } from "../../interfaces/customers.interfaces";



export const profileCustomerController = async(req: Request, res: Response): Promise<Response> => {

    const id: number = Number(res.locals.id)

    const profileCustomer: TCustomerResponse = await profileCustomerService(id);

    return res.status(200).json(profileCustomer);
}