import userService from "../users/user.service";
import { User } from "../users/user.types";

import { AuthResponses } from "./auth.responses";
import { CredentialsI } from "./auth.type";

const userDetails = (credentials: CredentialsI) => {
	try {
		const user = userService.findOne(credentials);
		// const { password, ...restOfTheUser } = user;

		return user;   
	} catch (e) {
		throw AuthResponses.INVALID_CREDENTAILS;
	}
};

export default {
    userDetails
}