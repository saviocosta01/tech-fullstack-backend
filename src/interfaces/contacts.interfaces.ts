import {z} from "zod"
import { contactRequestSchema, contactSchema, contactUpdateSchema, contactsListSchema } from "../schemas/contacts.schema"


export type TContacts = z.infer<typeof contactSchema>

export type TContactsRequest = z.infer<typeof contactRequestSchema>

export type TContactsList = z.infer<typeof contactsListSchema>

export type TContactsUpdate = z.infer<typeof contactUpdateSchema>