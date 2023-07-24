import { Repository } from "typeorm";
import Customer from "../../entities/customers.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/App.error";
import Contact from "../../entities/contacts.entity";




export const deleteCustomersService = async(id: number): Promise<void> => {


    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

    const customer: Customer | null = await customerRepository.findOneBy({id: id})

    if(!customer){
        throw new AppError("Customer not found", 404)
    }
    const contact: Contact[] = await contactRepository.find({
        where: {
            customer:customer
        }
    })

    await contactRepository.remove(contact);
    
    await customerRepository.remove(customer);

}