import { Repository } from "typeorm";
import { TCustomersList } from "../../interfaces/customers.interfaces";
import Customer from "../../entities/customers.entity";
import { AppDataSource } from "../../data-source";
import { customersListSchema } from "../../schemas/customers.schema";


export const listCustomersService = async(): Promise<TCustomersList> => {

    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

    const customers = await customerRepository.find();

    return customersListSchema.parse(customers);

}