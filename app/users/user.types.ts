import { mockUsers } from "./user.data";

export interface UserResponsesI {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

export interface User{
	id:number,
	username:string,
	displayName:string
}
// export interface Users{
	
// }