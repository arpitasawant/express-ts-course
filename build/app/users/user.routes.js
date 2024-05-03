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
// post requests
userRouter.post('/users', (req, res) => {
    // console.log(req.body);
    // return res.send(200);
    const { body } = req;
    const newUser = Object.assign({ id: user_data_1.mockUsers[user_data_1.mockUsers.length - 1].id + 1 }, body);
    user_data_1.mockUsers.push(newUser);
    return res.send(newUser);
});
// put requests
userRouter.put('/users/:id', (req, res) => {
    const { body, params: { id }, } = req;
    const parsedId = parseInt(id);
    if (isNaN(parsedId))
        return res.sendStatus(400);
    const findUserIndex = user_data_1.mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1)
        return user_responses_1.userResponses.USER_NOT_FOUND;
    user_data_1.mockUsers[findUserIndex] = Object.assign({ id: parsedId }, body);
    return res.sendStatus(200);
});
exports.default = new routes_types_1.Route("/api", userRouter);
