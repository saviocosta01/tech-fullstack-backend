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
exports.loginCustomerService = void 0;
require("dotenv/config");
const customers_entity_1 = __importDefault(require("../../entities/customers.entity"));
const data_source_1 = require("../../data-source");
const App_error_1 = require("../../errors/App.error");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const loginCustomerService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    const customerRepository = data_source_1.AppDataSource.getRepository(customers_entity_1.default);
    const customer = yield customerRepository.findOneBy({
        email: email,
    });
    if (customer == undefined) {
        throw new App_error_1.AppError("Invalid credentials", 401);
    }
    const passwordIsValid = yield (0, bcryptjs_1.compare)(String(password), customer.password);
    if (!passwordIsValid) {
        throw new App_error_1.AppError("Invalid credentials", 401);
    }
    const token = (0, jsonwebtoken_1.sign)({ fullname: customer.full_name }, String(process.env.SECRET_KEY), { expiresIn: "24h", subject: String(customer.id) });
    const returnObj = {
        token,
        customer
    };
    return returnObj;
});
exports.loginCustomerService = loginCustomerService;
