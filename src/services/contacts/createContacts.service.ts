import { Repository } from "typeorm";
import { TContacts, TContactsRequest } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { contactSchema } from "../../schemas/contacts.schema";
import Customer from "../../entities/customers.entity";
import { AppError } from "../../errors/App.error";



export const createContactService = async(data: TContactsRequest, customerId: number): Promise<TContacts> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

    const customer: Customer | null = await customerRepository.findOneBy({id: customerId});

    if(!customer){
        throw new AppError("Customer not found", 404);
    }

    const contact: Contact = contactRepository.create({
        ...data,
        customer: customer
    });
    console.log(contact)
    await contactRepository.save(contact);

    return contactSchema.parse(contact);
}