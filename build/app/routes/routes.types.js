"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.path = path;
        this.router = router;
        if (!this.path.startsWith('/')) {
            throw new Error("Path should start with /");
        }
        if (Route.registeredRoutes.find(r => r.path === this.path)) {
            throw new Error(`Path ${path} already exists`);
        }
        Route.registeredRoutes.push(this);
    }
}
exports.Route = Route;
Route.registeredRoutes = [];
