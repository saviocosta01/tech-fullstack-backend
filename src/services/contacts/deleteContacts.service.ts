import { Repository } from "typeorm";
import Contact from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/App.error";



export const deleteContactService = async(id: number): Promise<void> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

    const contact: Contact | null = await contactRepository.findOneBy({id: id});

    if(!contact){
        throw new AppError("Contact not found", 404);
    }

    await contactRepository.remove(contact);

}