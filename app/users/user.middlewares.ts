import { Request, Response, NextFunction,Router } from "express";
import { mockUsers } from "./user.data";

export const loggingmiddleware = (req:Request,res:Response,next:NextFunction) => {
    console.log(`${req.method} - ${req.url}`)
    next();
}

export const resolveIndexByUserById = (req:Request,res:Response,next:NextFunction) => {
    const {body,params:{id}}=req;
    // const parsedId = parseInt(id);
    const parsedId = id;
    const findUserIndex= mockUsers.findIndex((user) => user.id === parsedId)
    if(findUserIndex === -1) return res.sendStatus(400)
    res.send(findUserIndex) 
    next();
}

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