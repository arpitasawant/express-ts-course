import { Router } from "express";

export class Route {
    static registeredRoutes: Route[] = [];
    constructor(
        public path: string,
        public router: Router
    ) {
        if (!this.path.startsWith('/')) {
            throw new Error("Path should start with /");
        }
        if (Route.registeredRoutes.find(r => r.path === this.path)) {
            throw new Error(`Path ${path} already exists`);
        }
        Route.registeredRoutes.push(this);
    }
}