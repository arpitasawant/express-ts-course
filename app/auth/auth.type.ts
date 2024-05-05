import { User } from "../users/user.types";

export interface credentials extends Pick<User,"username"|"displayName">{}
