"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const productRouter = (0, express_1.Router)();
productRouter.get("/", (req, res) => {
    console.log(req.headers.cookie);
    console.log(req.cookies);
    res.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});
productRouter.get("/cookie", (req, res, next) => {
    res.cookie("hello", "world", { maxAge: 60000 * 60 * 2 });
    res.status(201).send({ msg: "Hello" });
});
exports.default = new routes_types_1.Route("/product", productRouter);
