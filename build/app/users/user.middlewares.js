"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveIndexByUserById = exports.loggingmiddleware = void 0;
const express_1 = require("express");
const user_data_1 = require("./user.data");
const middlewareRouter = (0, express_1.Router)();
const loggingmiddleware = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
};
exports.loggingmiddleware = loggingmiddleware;
const resolveIndexByUserById = (req, res, next) => {
    const { body, params: { id } } = req;
    // const parsedId = parseInt(id);
    const parsedId = id;
    const findUserIndex = user_data_1.mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1)
        return res.sendStatus(400);
    res.send(findUserIndex);
    next();
};
exports.resolveIndexByUserById = resolveIndexByUserById;
// middlewareRouter.get("/", (req, res, next) => {
//     console.log("base url");
//     next()
// },
//     (req, res, next) => {
//         console.log("base url");
//         next()
//     },
//     (req, res, next) => {
//         console.log("base url");
//         next()
//     },
//     (req, res) => {
//         res.status(201).send({ msg: "hello" })
//     }
// )
