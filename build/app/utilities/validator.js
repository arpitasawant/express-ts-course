"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.params = exports.body = void 0;
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
const params = (schema) => validator("params", schema);
exports.params = params;
const query = (schema) => validator("query", schema);
exports.query = query;
