import { Repository } from "typeorm";
import Contact from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { TContactsRequest, TContactsUpdate } from "../../interfaces/contacts.interfaces";
import { AppError } from "../../errors/App.error";
import { contactSchemaRequest, contactUpdateSchema } from "../../schemas/contacts.schema";
import Customer from "../../entities/customers.entity";



export const updateContactService = async(contactId: number, data: TContactsUpdate | any): Promise<TContactsUpdate> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
    
    const contact: Contact | null = await contactRepository.findOneBy({id: contactId})

    if(!contact){
        throw new AppError("Contact not foundddddddddd", 404);
    }

    const newContact= contactRepository.create({
        ...contact,
        ...data,
    })

    await contactRepository.save(newContact);

    return contactSchemaRequest.parse(newContact);
}