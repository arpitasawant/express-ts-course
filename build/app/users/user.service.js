"use strict";
// import userRepo from "./user.repo";
// import { UserI } from "./user.types";
// import { userResponses } from "./user.responses";
// import { AuthResponses } from "../auth/auth.responses";
// const find = (query: Partial<UserI>) => userRepo.find(query);
// function findOne(query: Partial<UserI>, safe?: false): UserI;
// function findOne(query: Partial<UserI>, safe?: true): false | UserI;
// function findOne(query: Partial<UserI>, safe: boolean = false) {
// 	const result = userRepo.findOne(query);
// 	if (!result) {
// 		if (safe) return false;
// 		throw userResponses.USER_NOT_FOUND;
// 	}
// 	return result;
// }
// const insertOne = (user: UserI) => {
// 	const didInsert = userRepo.insertOne(user);
// 	if (didInsert) return userResponses.INSERT_SUCCESSFUL;
// 	throw userResponses.INSERT_FAILED;
// };
// const updateOne = (userData: UserI) => {
// 	const didDelete = userRepo.updateOne(userData);
// 	if (didDelete) return userResponses.UPDATE_SUCCESSFUL;
// 	throw userResponses.UPDATE_FAILED;
// };
// const deleteOne = (id: string) => {
// 	const didDelete = userRepo.deleteOne(id);
// 	if (didDelete) return userResponses.DELETE_SUCCESSFUL;
// 	throw userResponses.DELETE_FAILED;
// };
// export default {
// 	find,
// 	findOne,
// 	insertOne,
// 	updateOne,
// 	deleteOne,
// };
