import { UserResponsesI } from "./user.types";

export const userResponses : UserResponsesI= {
    "USER_NOT_FOUND":{
        statusCode:404,
        message:"user not found"
    },
    "INVALID_ID":{
        statusCode:400,
        message:"invalid id"
    }

}