import {z} from "zod"


export const loginCustomerSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})
