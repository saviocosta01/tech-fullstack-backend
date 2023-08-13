"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidated = void 0;
require("dotenv/config");
const App_error_1 = require("../errors/App.error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenValidated = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        throw new App_error_1.AppError("Missing bearer token", 401);
    }
    const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(" ")[1];
    jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY), (error, decoded) => {
        if (error) {
            throw new App_error_1.AppError(error.message, 401);
        }
        res.locals.id = decoded.sub;
    });
    return next();
};
exports.tokenValidated = tokenValidated;
