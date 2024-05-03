"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const express_1 = require("express");
const response_handler_1 = require("../utilities/response-handler");
const routes_data_1 = require("./routes.data");
const registerMiddlewares = (app) => {
    app.use((0, express_1.json)());
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    // error handling middleware
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerMiddlewares = registerMiddlewares;
