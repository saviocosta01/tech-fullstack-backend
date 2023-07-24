import { Repository } from "typeorm";
import { TCustomersUpdate } from "../../interfaces/customers.interfaces";
import Customer from "../../entities/customers.entity";
import { AppDataSource } from "../../data-source";
import { customerSchemaResponse, customerUpdateSchema } from "../../schemas/customers.schema";
import { AppError } from "../../errors/App.error";



export const updateCustomersService = async(id: number, data: TCustomersUpdate | any): Promise<TCustomersUpdate> => {

    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

    const customer: Customer | null = await customerRepository.findOneBy({
        id: id,
      });

    if(!customer){
        throw new AppError("Customer not found", 404);
    }
    
    const newCustomer= customerRepository.create({
        ...customer,
        ...data,
      });

    await customerRepository.save(newCustomer);

    return customerSchemaResponse.parse(newCustomer);

}