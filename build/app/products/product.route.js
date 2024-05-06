"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const productRouter = (0, express_1.Router)();
productRouter.get("/", (req, res) => {
    console.log(req.headers.cookie);
    console.log(req.cookies);
    console.log(req.signedCookies.hello);
    if (req.cookies.hello && req.cookies.hello === "world")
        return res.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
    return res.send(403).send({ msg: "Sorry.You need the correct cookie" });
});
// productRouter.get("/cookie", (req, res, next) => {
// 	res.cookie("hello","world",{maxAge:10000,signed:true});
//     res.status(201).send({msg:"Hello"});
// });
productRouter.get("/cookie", (req, res, next) => {
    console.log(req.session);
    console.log(req.session.id);
    res.cookie("hello", "world", { maxAge: 10000, signed: true });
    res.status(201).send({ msg: "Hello" });
});
exports.default = new routes_types_1.Route("/product", productRouter);
