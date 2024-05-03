import { Router } from "express";

import { Route } from "../routes/routes.types";
// import userServices from "./user.services";
import { ResponseHandler } from "../utilities/response-handler";
import { mockUsers } from "./user.data";
import { userResponses } from "./user.responses";

const userRouter = Router();

userRouter.get("/user", (req, res, next) => {
	res.send(mockUsers)
});

userRouter.get("/user/:id", (req, res, next) => {
	console.log(req.params);
    // convert id string to number
    const parsedId = parseInt(req.params.id);
    console.log(parsedId)
    if(isNaN(parsedId))
        throw userResponses.INVALID_ID;

    const findUser = mockUsers.find((user) => user.id === parsedId);
    if(!findUser) throw userResponses.USER_NOT_FOUND;
    return res.send(findUser);
});

export default new Route("/api", userRouter);
