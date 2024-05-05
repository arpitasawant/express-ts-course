"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const auth_validation_1 = require("./auth.validation");
const response_handler_1 = require("../utilities/response-handler");
const auth_services_1 = __importDefault(require("./auth.services"));
const router = (0, express_1.Router)();
router.post("/userdetails", ...auth_validation_1.userDetailsValidation, (req, res, next) => {
    try {
        const result = auth_services_1.default.userDetails(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.default = new routes_types_1.Route("/auth", router);
