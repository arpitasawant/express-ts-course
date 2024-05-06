"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const express_1 = require("express");
const response_handler_1 = require("../utilities/response-handler");
const routes_data_1 = require("./routes.data");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const registerMiddlewares = (app) => {
    app.use((0, express_1.json)());
    app.use((0, cookie_parser_1.default)());
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    // error handling middleware
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerMiddlewares = registerMiddlewares;
