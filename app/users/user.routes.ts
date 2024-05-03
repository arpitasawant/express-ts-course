import { Router } from "express";

import { Route } from "../routes/routes.types";
// import userServices from "./user.services";
import { ResponseHandler } from "../utilities/response-handler";

const userRouter = Router();

userRouter.get("/api", (req, res, next) => {
	res.send([
        {id:1,username:"anson",displayName:"Anson"},
        {id:2,username:"jack",displayName:"Jack"},
        {id:3,username:"adam",displayName:"Adam"}
    ])
});



export default new Route("/user", userRouter);
