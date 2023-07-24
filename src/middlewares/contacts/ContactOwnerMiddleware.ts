import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import Contact from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import Customer from "../../entities/customers.entity";
import { AppError } from "../../errors/App.error";



export const contactOwnerMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

    const customerId = Number(res.locals.id);
    const contactId = Number(req.params.id)

    const customer: any = await customerRepository.findOneBy({id: customerId});

    const contactsCustomerLogged = await contactRepository.find({
        where: {
            customer: customer,
            id: contactId
        }
    })

    if(contactsCustomerLogged.length == 0){
        throw new AppError("Você não tem esse contato", 404);
    }

    return next();
}