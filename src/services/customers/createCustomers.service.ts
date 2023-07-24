import { Repository } from "typeorm";
import { TCustomerResponse, TCustomersRequest } from "../../interfaces/customers.interfaces";
import Customer from "../../entities/customers.entity";
import { AppDataSource } from "../../data-source";
import { customerSchema, customerSchemaResponse } from "../../schemas/customers.schema";
import {hash} from "bcryptjs";
import { AppError } from "../../errors/App.error";


export const createCustomersService = async(data: TCustomersRequest): Promise<TCustomerResponse> => {

    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);

    const findCustomer = await customerRepository.findOne({
        where: {
            email: data.email
        }
    })
    if(findCustomer){
        throw new AppError("User already exists", 409)
    }

    data.password = await hash(data.password, 10)

    const customer: Customer = customerRepository.create(data);

    await customerRepository.save(customer);

    return customerSchemaResponse.parse(customer);

}