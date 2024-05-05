import { z} from 'zod';
export interface UserResponsesI {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

// export interface User  {

// 	id:number,
// 	username:string,
// 	displayName:string

// }

export const user =z.object({

	id:z.string(),
	username:z.string(),
	displayName:z.string()

})

export interface User extends z.infer<typeof user> {}