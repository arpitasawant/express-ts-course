import { request, Router } from "express";

import { Route } from "../routes/routes.types";
// import userServices from "./user.services";
import { ResponseHandler } from "../utilities/response-handler";
import { mockUsers } from "./user.data";
import { userResponses } from "./user.responses";
import { User } from "./user.types";

const userRouter = Router();

userRouter.get("/user", (req, res, next) => {
    console.log(req.query);
    const {query : {filter,value}} = req;
	if(!filter && !value) return res.send(mockUsers);

    if(filter && value){
        return res.send(
            mockUsers.filter((user)=> user[filter as keyof Omit<User, "id">].includes(value as string)))
        
    }
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

// post requests

userRouter.post('/users',(req,res)=>{
    // console.log(req.body);
    // return res.send(200);
    const {body} = req;
    const newUser = {id : mockUsers[mockUsers.length-1].id + 1,...body};
    mockUsers.push(newUser);
    return res.send(newUser);
})

export default new Route("/api", userRouter);