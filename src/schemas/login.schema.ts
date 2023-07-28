import {z} from "zod"
import { customerSchemaResponse } from "./customers.schema"


export const loginCustomerSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})


export const loginResponseSchema = z.object({
    token: z.string(),
    customer: customerSchemaResponse
})