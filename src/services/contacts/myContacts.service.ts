import { Repository } from "typeorm"
import Contact from "../../entities/contacts.entity"
import { AppDataSource } from "../../data-source"
import Customer from "../../entities/customers.entity";
import { AppError } from "../../errors/App.error";
import { contactsListSchema } from "../../schemas/contacts.schema";



export const myContactService = async(customerId: number) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

    const customer: Customer[] = await customerRepository.find({
        where: {
            id: customerId
        }
    })

    const contacts: Contact[] = await contactRepository.find({
        where: {
            customer: customer
        }
    })

    return contactsListSchema.parse(contacts);
}