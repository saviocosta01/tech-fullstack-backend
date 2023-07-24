import "dotenv/config";
import { Repository } from "typeorm";
import { TLoginCustomer } from "../../interfaces/login.interfaces";
import Customer from "../../entities/customers.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/App.error";
import { compare } from "bcryptjs";
import jwt, { sign } from "jsonwebtoken";


export const loginCustomerService = async (data: TLoginCustomer): Promise<string> => {
    const { email, password } = data;
    
    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);
  
    const customer: Customer | null = await customerRepository.findOneBy({
      email: email,
    });
    
    if (customer == undefined) {
      throw new AppError("Invalid credentials", 401);
    }

    const passwordIsValid: boolean = await compare(String(password), customer.password);

    if (!passwordIsValid) {
      throw new AppError("Invalid credentials", 401);
    }
    
    const token: string = sign(
      {fullname: customer.full_name },
      String(process.env.SECRET_KEY),
      { expiresIn: "24h", subject: String(customer.id) }
    );
  
    return token;
  };
  