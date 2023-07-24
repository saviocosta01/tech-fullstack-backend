import { Repository } from "typeorm";
import { TContactsList } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { contactsListSchema } from "../../schemas/contacts.schema";



export const listContactService = async(): Promise<TContactsList> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

    const contact: Contact[] = await contactRepository.find()

    return contactsListSchema.parse(contact);
}