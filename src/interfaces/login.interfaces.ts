import {z} from "zod"
import { loginCustomerSchema, loginResponseSchema } from "../schemas/login.schema"


export type TLoginCustomer = z.infer<typeof loginCustomerSchema>

export type Tlogin = z.infer<typeof loginResponseSchema>