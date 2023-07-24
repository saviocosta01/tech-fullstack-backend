import {z} from "zod"

export const customerSchema = z.object({
    id: z.number(),
    full_name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    registration_Date: z.string()
})

export const customerRequestSchema = customerSchema.omit({id: true, registration_Date: true})

export const customerSchemaResponse = customerSchema.omit({password: true})

export const customersListSchema = z.array(customerSchemaResponse)

export const customerUpdateSchema = customerRequestSchema.partial()