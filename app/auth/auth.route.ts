import { Router } from "express";
import { Route } from "../routes/routes.types";
import { userDetailsValidation } from "./auth.validation";
import { ResponseHandler } from "../utilities/response-handler";
import authServices from "./auth.services";
const router = Router();

router.post("/userdetails", ...userDetailsValidation, (req, res, next) => {
	try {
		const result = authServices.userDetails(req.body);
		res.send(new ResponseHandler(result));
	} catch (e) {
		next(e);
	}
});

export default new Route("/auth", router);