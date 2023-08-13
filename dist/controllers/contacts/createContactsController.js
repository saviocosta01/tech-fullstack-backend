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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactsController = void 0;
const createContacts_service_1 = require("../../services/contacts/createContacts.service");
const createContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = Number(res.locals.id);
    const data = req.body;
    const newContact = yield (0, createContacts_service_1.createContactService)(data, customerId);
    return res.status(201).json(newContact);
});
exports.createContactsController = createContactsController;
