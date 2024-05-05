import { User, user, UserResponses } from "../users/user.types";

export interface CredentialsI extends Pick<User, "username" | "displayName"> {}
  
export const Credentials = user.pick({username:true,displayName:true})

export interface AuthResponses extends UserResponses {}
