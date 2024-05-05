import { body } from "../utilities/validator";
import { Credentials } from "./auth.type";

export const userDetailsValidation = [
	body(Credentials)
];