import { Repository } from "typeorm";
import { TCustomerResponse } from "../../interfaces/customers.interfaces";
import Customer from "../../entities/customers.entity";
import { AppDataSource } from "../../data-source";
import { customerSchemaResponse } from "../../schemas/customers.schema";
import { AppError } from "../../errors/App.error";




export const profileCustomerService = async(id: number): Promise<TCustomerResponse> => {

    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

    const customer = await customerRepository.findOneBy({id: id});

    if(!customer){
        throw new AppError("Customer not found")
    }

    return customerSchemaResponse.parse(customer);

}