import { UserResponses } from "./user.types";

export const userResponses : UserResponses= {
    "USER_NOT_FOUND":{
        statusCode:404,
        message:"user not found"
    },
    "INVALID_ID":{
        statusCode:400,
        message:"invalid id"
    }

}