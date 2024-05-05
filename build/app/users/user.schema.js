"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const uuid_1 = require("uuid");
class UserSchema {
    get(method, query) {
        return UserSchema.usersData[method]((user) => {
            const keys = Object.keys(query);
            for (let key of keys) {
                if (user[key] !== query[key]) {
                    return false;
                }
            }
            return true;
        });
    }
    find(query) {
        return this.get("filter", query);
    }
    findOne(query) {
        return this.get("find", query);
    }
    insertOne(user) {
        UserSchema.usersData.push(Object.assign(Object.assign({}, user), { id: (0, uuid_1.v4)() }));
        return true;
    }
    insertMany(users) {
        users.forEach((user) => this.insertOne(user));
        return true;
    }
    updateOne(userData) {
        let isPresent = this.findOne(userData);
        if (!isPresent)
            return false;
        const newUserObj = Object.assign(Object.assign({}, userData), { id: isPresent.id, username: isPresent.username });
        this.deleteOne(userData.id);
        this.insertOne(newUserObj);
        return true;
    }
    putData(userData) {
        const isPresent = this.findOne({ id: userData.id });
        if (!isPresent)
            return false;
        const updatedUser = Object.assign({}, userData);
        for (const key in isPresent) {
            if (!userData.hasOwnProperty(key)) {
                delete updatedUser[key];
            }
        }
        const userIndex = UserSchema.usersData.findIndex((user) => user.id === isPresent.id);
        UserSchema.usersData[userIndex] = updatedUser;
        return true;
    }
    deleteOne(id) {
        const isPresent = this.findOne({ id });
        if (!isPresent)
            return false;
        const userIndex = UserSchema.usersData.findIndex((user) => user.id === isPresent.id);
        UserSchema.usersData.splice(userIndex, 1);
        return true;
    }
}
UserSchema.usersData = [
    { id: "1", username: "abcd", displayName: "abc" },
    { id: "2", username: "efgh", displayName: "dgf" },
];
exports.userModel = new UserSchema();
