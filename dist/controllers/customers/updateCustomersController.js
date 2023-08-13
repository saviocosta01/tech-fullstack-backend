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
exports.updateCustomersController = void 0;
const updateCustomers_service_1 = require("../../services/customers/updateCustomers.service");
const updateCustomersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(res.locals.id);
    const data = req.body;
    const updateCustomers = yield (0, updateCustomers_service_1.updateCustomersService)(id, data);
    return res.status(200).json(updateCustomers);
});
exports.updateCustomersController = updateCustomersController;
