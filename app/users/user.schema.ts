import { v4 } from "uuid";

import {User } from "./user.types";

class UserSchema {
	public static usersData: User[] = [
		{ id: "1", username: "abcd", displayName:"abc" },
		{ id: "2", username: "efgh", displayName:"dgf" },
	];


	private get<T extends "filter" | "find">(method: T, query: Partial<User>) {
		return UserSchema.usersData[method]((user) => {
			const keys = Object.keys(query) as (keyof User)[];
			for (let key of keys) {
				if (user[key] !== query[key]) {
					return false;
				}
			}
			return true;
		}) as T extends "filter" ? User[] : User | undefined;
	}

	find(query:  Partial<User>): User[] {
		return this.get("filter", query);
	}

	findOne(query:Partial<User>): User | undefined {
		return this.get("find", query);
	}


	insertOne(user: Omit<User, "id">) {
		UserSchema.usersData.push({ ...user, id: v4() });
		return true;
	}

	insertMany(users: User[]) {
		users.forEach((user) => this.insertOne(user));
		return true;
	}

	updateOne(userData: User) {
		let isPresent = this.findOne(userData);
        
		if (!isPresent) return false;

		const newUserObj = { ...userData, id: isPresent.id, username: isPresent.username };
		this.deleteOne(userData.id);
		this.insertOne(newUserObj);
		return true;
	}

	putData(userData: User) {
		const isPresent = this.findOne({ id: userData.id });
		if (!isPresent) return false;
	  
		const updatedUser = { ...userData };
		
		for (const key in isPresent) {
		  if (!userData.hasOwnProperty(key)) {
			delete (updatedUser as { [key: string]: any })[key];
		  }
		}
	  
		const userIndex = UserSchema.usersData.findIndex((user) => user.id === isPresent.id);
		UserSchema.usersData[userIndex] = updatedUser;
		return true;
	  }
	  

	deleteOne(id: string) {
        
		const isPresent = this.findOne( {id});

		if (!isPresent) return false;

		const userIndex = UserSchema.usersData.findIndex((user) => user.id === isPresent.id);
		UserSchema.usersData.splice(userIndex, 1);
		return true;
	}
    
    
}

export const userModel = new UserSchema();
