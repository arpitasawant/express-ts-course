"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const userRouter = (0, express_1.Router)();
userRouter.get("/api", (req, res, next) => {
    res.send([
        { id: 1, username: "anson", displayName: "Anson" },
        { id: 2, username: "jack", displayName: "Jack" },
        { id: 3, username: "adam", displayName: "Adam" }
    ]);
});
exports.default = new routes_types_1.Route("/user", userRouter);
