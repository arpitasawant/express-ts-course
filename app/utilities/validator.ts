import { Request, Response, NextFunction } from "express";
import { Schema } from "zod";

const validator =
	(source: "body" | "params" | "query", schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
		try {
			req[source] = schema.parse(req[source]);
			next();
		} catch (e) {
			next({ statusCode: 400, message: "BAD REQUEST", errors: e });
		}
	};

export const body = (schema: Schema) => validator("body", schema);
