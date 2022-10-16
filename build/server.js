"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
const config_1 = require("./config/config");
const AppError_1 = require("./errors/AppError");
const routes_1 = require("./routes");
require("./shared/container");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
app.get("/", (req, res) => {
    res.status(200).json({ messege: "OK!" });
});
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});
app.listen(config_1.PORT, () => {
    console.log("Servidor rodando!🛸");
});
