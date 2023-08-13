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
exports.myContactService = void 0;
const contacts_entity_1 = __importDefault(require("../../entities/contacts.entity"));
const data_source_1 = require("../../data-source");
const customers_entity_1 = __importDefault(require("../../entities/customers.entity"));
const contacts_schema_1 = require("../../schemas/contacts.schema");
const myContactService = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_entity_1.default);
    const customerRepository = data_source_1.AppDataSource.getRepository(customers_entity_1.default);
    const customer = yield customerRepository.find({
        where: {
            id: customerId
        }
    });
    const contacts = yield contactRepository.find({
        where: {
            customer: customer
        }
    });
    return contacts_schema_1.contactsListSchema.parse(contacts);
});
exports.myContactService = myContactService;
