"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_routes_1 = __importDefault(require("../users/user.routes"));
const auth_route_1 = __importDefault(require("../auth/auth.route"));
const product_route_1 = __importDefault(require("../products/product.route"));
exports.routes = [
    user_routes_1.default, auth_route_1.default, product_route_1.default
];
