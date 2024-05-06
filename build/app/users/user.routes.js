"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const user_service_1 = __importDefault(require("./user.service"));
const response_handler_1 = require("../utilities/response-handler");
const user_middlewares_1 = require("./user.middlewares");
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res, next) => {
    try {
        const result = user_service_1.default.find({});
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
userRouter.get("/:username", (req, res, next) => {
    try {
        const result = user_service_1.default.find({ username: req.params.username });
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
userRouter.post("/", (req, res, next) => {
    try {
        const result = user_service_1.default.insertOne(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
userRouter.put("/update", (req, res, next) => {
    try {
        const result = user_service_1.default.putData(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
userRouter.patch("/edit", (req, res, next) => {
    try {
        const result = user_service_1.default.updateOne(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
userRouter.use(user_middlewares_1.loggingmiddleware);
userRouter.delete("/:id", (req, res, next) => {
    try {
        const result = user_service_1.default.deleteOne(req.params.id);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
// userRouter.get("/cookie", (req, res, next) => {
// 	res.cookie("hello","world",{maxAge:60000*60*2});
//     res.status(201).send({msg:"Hello"});
// });
exports.default = new routes_types_1.Route("/user", userRouter);
