import { userModel } from "./user.schema";
import { User } from "./user.types";

const find = (query:Partial<User>) => userModel.find(query);

const findOne = (query:Partial<User>) => userModel.findOne(query);

const insertOne = (query:Omit<User,"id">) => userModel.insertOne(query);

// const insertMany = (query:Partial<User>) => userModel.insertMany(query);

const updateOne = (userData : User) => userModel.updateOne(userData);

const putData = (userData : User) => userModel.putData(userData);

const deleteOne = (id:string) => userModel.deleteOne(id);

export default {
	find,
	findOne,
	insertOne,
	updateOne,
	deleteOne,
	putData
};