import { Request, Response } from "express"
import { TLoginCustomer, Tlogin } from "../../interfaces/login.interfaces"
import { loginCustomerService } from "../../services/login/loginCustomer.service"




export const loginCustomersControllers = async(req: Request, res: Response): Promise<Response> => {

    const data: TLoginCustomer = req.body

    const token: Tlogin  = await loginCustomerService(data)

    return res.status(200).json(token)
}