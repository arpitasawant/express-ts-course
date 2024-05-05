import { z} from 'zod';
export interface UserResponses {
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
	username:z.string().trim().min(1, { message: "Required" }),
	displayName:z.string().trim().min(1, { message: "Required" })

})

export interface User extends z.infer<typeof user> {}