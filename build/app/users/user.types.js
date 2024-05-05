"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const zod_1 = require("zod");
// export interface User  {
// 	id:number,
// 	username:string,
// 	displayName:string
// }
exports.user = zod_1.z.object({
    id: zod_1.z.string(),
    username: zod_1.z.string(),
    displayName: zod_1.z.string()
});
