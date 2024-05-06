import { Application, json, NextFunction, Request, Response } from "express";
import { ResponseHandler } from "../utilities/response-handler";
import { routes } from "./routes.data";
import cookieParser from "cookie-parser";

export const registerMiddlewares = (app: Application) => {
    app.use(json());
    app.use(cookieParser());
    for (let route of routes) {
        app.use(route.path, route.router);
    }

    // error handling middleware
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    })
}