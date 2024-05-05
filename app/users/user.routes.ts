import { Router } from "express";

import { Route } from "../routes/routes.types";
import userService from "./user.service";
import { ResponseHandler } from "../utilities/response-handler";
import { loggingmiddleware, resolveIndexByUserById } from "./user.middlewares";

const userRouter = Router();

userRouter.get("/", (req, res, next) => {
	try {
		const result = userService.find({});
		res.send(new ResponseHandler(result)); 
	} catch (e) {
		next(e);
	}
});

userRouter.get("/:username", (req, res, next) => {
	try {
		const result = userService.find({ username: req.params.username });
		res.send(new ResponseHandler(result)); 
	} catch (e) {
		next(e);
	}
});

userRouter.post("/", (req, res, next) => {
	try {
		const result = userService.insertOne(req.body);
		res.send(new ResponseHandler(result));
	} catch (e) {
		next(e);
	}
});

userRouter.put("/update", (req, res, next) => {
	try {
		const result = userService.putData(req.body);
		res.send(new ResponseHandler(result));
	} catch (e) {
		next(e);
	}
});

userRouter.patch("/edit", (req, res, next) => {
	try {
		const result = userService.updateOne(req.body);
		res.send(new ResponseHandler(result));
	} catch (e) {
		next(e);
	}
});
userRouter.use(loggingmiddleware);

userRouter.delete("/:id", (req, res, next) => {
	try {
		const result = userService.deleteOne(req.params.id);
		res.send(new ResponseHandler(result));
	} catch (e) {
		next(e);
	}
});


export default new Route("/user", userRouter);
