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
exports.updateCustomersService = void 0;
const customers_entity_1 = __importDefault(require("../../entities/customers.entity"));
const data_source_1 = require("../../data-source");
const customers_schema_1 = require("../../schemas/customers.schema");
const App_error_1 = require("../../errors/App.error");
const updateCustomersService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const customerRepository = data_source_1.AppDataSource.getRepository(customers_entity_1.default);
    const customer = yield customerRepository.findOneBy({
        id: id,
    });
    if (!customer) {
        throw new App_error_1.AppError("Customer not found", 404);
    }
    const newCustomer = customerRepository.create(Object.assign(Object.assign({}, customer), data));
    yield customerRepository.save(newCustomer);
    return customers_schema_1.customerSchemaResponse.parse(newCustomer);
});
exports.updateCustomersService = updateCustomersService;
