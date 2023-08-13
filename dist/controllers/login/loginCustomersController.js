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
exports.loginCustomersControllers = void 0;
const loginCustomer_service_1 = require("../../services/login/loginCustomer.service");
const loginCustomersControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const token = yield (0, loginCustomer_service_1.loginCustomerService)(data);
    return res.status(200).json(token);
});
exports.loginCustomersControllers = loginCustomersControllers;
