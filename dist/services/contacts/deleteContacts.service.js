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
exports.deleteContactService = void 0;
const contacts_entity_1 = __importDefault(require("../../entities/contacts.entity"));
const data_source_1 = require("../../data-source");
const App_error_1 = require("../../errors/App.error");
const deleteContactService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_entity_1.default);
    const contact = yield contactRepository.findOneBy({ id: id });
    if (!contact) {
        throw new App_error_1.AppError("Contact not found", 404);
    }
    yield contactRepository.remove(contact);
});
exports.deleteContactService = deleteContactService;
