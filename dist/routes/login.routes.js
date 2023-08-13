"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const loginCustomersController_1 = require("../controllers/login/loginCustomersController");
exports.loginRouter = (0, express_1.Router)();
exports.loginRouter.post("", loginCustomersController_1.loginCustomersControllers);
