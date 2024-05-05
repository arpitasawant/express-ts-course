"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const find = (query) => user_schema_1.userModel.find(query);
const findOne = (query) => user_schema_1.userModel.findOne(query);
const insertOne = (query) => user_schema_1.userModel.insertOne(query);
// const insertMany = (query:Partial<User>) => userModel.insertMany(query);
const updateOne = (userData) => user_schema_1.userModel.updateOne(userData);
const putData = (userData) => user_schema_1.userModel.putData(userData);
const deleteOne = (id) => user_schema_1.userModel.deleteOne(id);
exports.default = {
    find,
    findOne,
    insertOne,
    updateOne,
    deleteOne,
    putData
};
