"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomersService = void 0;
const customers_entity_1 = __importDefault(require("../../entities/customers.entity"));
const data_source_1 = require("../../data-source");
const customers_schema_1 = require("../../schemas/customers.schema");
const bcryptjs_1 = require("bcryptjs");
const App_error_1 = require("../../errors/App.error");
const createCustomersService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customerRepository = data_source_1.AppDataSource.getRepository(customers_entity_1.default);
    const findCustomer = yield customerRepository.findOne({
        where: {
            email: data.email
        }
    });
    if (findCustomer) {
        throw new App_error_1.AppError("User already exists", 409);
    }
    data.password = yield (0, bcryptjs_1.hash)(data.password, 10);
    const customer = customerRepository.create(data);
    yield customerRepository.save(customer);
    return customers_schema_1.customerSchemaResponse.parse(customer);
});
exports.createCustomersService = createCustomersService;
