import { request, Router } from "express";

import { Route } from "../routes/routes.types";
// import userServices from "./user.services";
import { ResponseHandler } from "../utilities/response-handler";
import { mockUsers } from "./user.data";
import { userResponses } from "./user.responses";
import { User } from "./user.types";

const userRouter = Router();

userRouter.get("/users", (req, res, next) => {
    console.log(req.query);
    const {query : {filter,value}} = req;
	if(!filter && !value) return res.send(mockUsers);

    if(filter && value){
        return res.send(
            mockUsers.filter((user)=> user[filter as keyof Omit<User, "id">].includes(value as string)))
        
    }
    });

userRouter.get("/users/:id", (req, res, next) => {
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

// put requests

userRouter.put('/users/:id',(req,res) => {
    const {
        body,params:{id},
    } = req;

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return res.sendStatus(400);

    const findUserIndex = mockUsers.findIndex(
        (user) => user.id === parsedId
    )

    if(findUserIndex === -1) return userResponses.USER_NOT_FOUND;

    mockUsers[findUserIndex] = {
        id:parsedId,...body
    }

    return res.sendStatus(200)
})

// patch

userRouter.patch('api/users/:id',(req,res) => {
    const {
        body,params:{id},
    } = req;

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return res.sendStatus(400);

    const findUserIndex = mockUsers.findIndex(
        (user) => user.id === parsedId
    )

    if(findUserIndex === -1) return userResponses.USER_NOT_FOUND;

    mockUsers[findUserIndex] = {...mockUsers[findUserIndex],...body}
    return res.sendStatus(200)
})
export default new Route("/api", userRouter);