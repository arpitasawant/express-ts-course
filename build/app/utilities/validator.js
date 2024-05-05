"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.body = void 0;
const validator = (source, schema) => (req, res, next) => {
    try {
        req[source] = schema.parse(req[source]);
        next();
    }
    catch (e) {
        next({ statusCode: 400, message: "BAD REQUEST", errors: e });
    }
};
const body = (schema) => validator("body", schema);
exports.body = body;
