// import { NextFunction, Request, Response } from "express";
// import { Repository } from "typeorm";
// import Contact from "../../entities/contacts.entity";
// import { AppDataSource } from "../../data-source";
// import { AppError } from "../../errors/App.error";



// export const contactOwnerMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
//     const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

//     const {email} = req.body;

//     const contact = await contactRepository.findOne({
//         where: {
//             email: email
//         }
//     })

//     if(contact){
//         throw new AppError("Esse ")
//     }
    
   
// }