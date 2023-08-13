"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUpdateSchema = exports.contactsListSchema = exports.listContactSchema = exports.contactSchemaRequest = exports.contactRequestSchema = exports.contactSchema = void 0;
const zod_1 = require("zod");
const customers_schema_1 = require("./customers.schema");
exports.contactSchema = zod_1.z.object({
    id: zod_1.z.number(),
    full_name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string(),
    registration_Date: zod_1.z.string(),
    customer: customers_schema_1.customerSchemaResponse
});
exports.contactRequestSchema = exports.contactSchema.omit({ id: true, registration_Date: true });
exports.contactSchemaRequest = exports.contactSchema.omit({ customer: true, id: true, registration_Date: true });
exports.listContactSchema = exports.contactSchema.omit({ customer: true });
exports.contactsListSchema = zod_1.z.array(exports.listContactSchema);
exports.contactUpdateSchema = exports.contactRequestSchema.partial();
