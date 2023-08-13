"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginResponseSchema = exports.loginCustomerSchema = void 0;
const zod_1 = require("zod");
const customers_schema_1 = require("./customers.schema");
exports.loginCustomerSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.loginResponseSchema = zod_1.z.object({
    token: zod_1.z.string(),
    customer: customers_schema_1.customerSchemaResponse
});
