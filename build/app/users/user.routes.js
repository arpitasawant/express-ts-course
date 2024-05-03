"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const user_data_1 = require("./user.data");
const userRouter = (0, express_1.Router)();
userRouter.get("/user", (req, res, next) => {
    res.send(user_data_1.mockUsers);
});
userRouter.get("/user/:id", (req, res, next) => {
    console.log(req.params);
    // convert id string to number
    const parsedId = parseInt(req.params.id);
    console.log(parsedId);
    if (isNaN(parsedId))
        return res.status(400).send({ msg: "Bad request.Invalid ID." });
    const findUser = user_data_1.mockUsers.find((user) => user.id === parsedId);
    if (!findUser)
        return res.sendStatus(404);
    return res.send(findUser);
});
exports.default = new routes_types_1.Route("/api", userRouter);
