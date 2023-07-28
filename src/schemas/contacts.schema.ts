import {z} from "zod"
import {customerSchemaResponse } from "./customers.schema"

export const contactSchema = z.object({
    id: z.number(),
    full_name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    registration_Date: z.string(),
    customer: customerSchemaResponse
})


export const contactRequestSchema = contactSchema.omit({id: true, registration_Date: true})

export const contactSchemaRequest = contactSchema.omit({customer: true, id: true, registration_Date: true})

export const listContactSchema = contactSchema.omit({customer: true})

export const contactsListSchema = z.array(listContactSchema)

export const contactUpdateSchema = contactRequestSchema.partial()