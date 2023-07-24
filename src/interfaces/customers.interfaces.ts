import {z} from "zod"
import { customerRequestSchema, customerSchema, customerSchemaResponse, customerUpdateSchema, customersListSchema } from "../schemas/customers.schema"


export type TCustomers = z.infer<typeof customerSchema>

export type TCustomersRequest = z.infer<typeof customerRequestSchema>

export type TCustomersList = z.infer<typeof customersListSchema>

export type TCustomersUpdate = z.infer<typeof customerUpdateSchema>

export type TCustomerResponse = z.infer<typeof customerSchemaResponse>