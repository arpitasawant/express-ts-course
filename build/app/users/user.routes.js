"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const user_data_1 = require("./user.data");
const user_responses_1 = require("./user.responses");
const userRouter = (0, express_1.Router)();
userRouter.get("/user", (req, res, next) => {
    console.log(req.query);
    const { query: { filter, value } } = req;
    if (!filter && !value)
        return res.send(user_data_1.mockUsers);
    if (filter && value) {
        return res.send(user_data_1.mockUsers.filter((user) => user[filter].includes(value)));
    }
});
userRouter.get("/user/:id", (req, res, next) => {
    console.log(req.params);
    // convert id string to number
    const parsedId = parseInt(req.params.id);
    console.log(parsedId);
    if (isNaN(parsedId))
        throw user_responses_1.userResponses.INVALID_ID;
    const findUser = user_data_1.mockUsers.find((user) => user.id === parsedId);
    if (!findUser)
        throw user_responses_1.userResponses.USER_NOT_FOUND;
    return res.send(findUser);
});
exports.default = new routes_types_1.Route("/api", userRouter);
