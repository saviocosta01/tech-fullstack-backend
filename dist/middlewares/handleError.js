"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const App_error_1 = require("../errors/App.error");
const errorHandler = (err, req, res, next) => {
    if (err instanceof App_error_1.AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            message: err.flatten().fieldErrors
        });
    }
    return res.status(500).json({ message: "Internal Server Error." });
};
exports.errorHandler = errorHandler;
