import {z} from "zod"
import { loginCustomerSchema } from "../schemas/login.schema"


export type TLoginCustomer = z.infer<typeof loginCustomerSchema>