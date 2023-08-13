"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerUpdateSchema = exports.customersListSchema = exports.customerSchemaResponse = exports.customerRequestSchema = exports.customerSchema = void 0;
const zod_1 = require("zod");
exports.customerSchema = zod_1.z.object({
    id: zod_1.z.number(),
    full_name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    phone: zod_1.z.string(),
    registration_Date: zod_1.z.string()
});
exports.customerRequestSchema = exports.customerSchema.omit({ id: true, registration_Date: true });
exports.customerSchemaResponse = exports.customerSchema.omit({ password: true });
exports.customersListSchema = zod_1.z.array(exports.customerSchemaResponse);
exports.customerUpdateSchema = exports.customerRequestSchema.partial();
