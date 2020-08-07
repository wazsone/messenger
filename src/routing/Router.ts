import { Route } from "./Route";
import { Block } from "../modules/block";

type Routes = Route<any> | null;
export class Router {
    private static _instance: Router;
    static getInstance() {
        if (!Router._instance) {
            return (Router._instance = new Router());
        }
        return Router._instance;
    }

    private _routes: Routes[];
    private _history: History;
    private _currentRoute: Routes;

    private constructor() {
        this._routes = [];
        this._history = window.history;
        this._currentRoute = null;
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) {
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    use<T>(pathname: string, block: Block<T>) {
        const route = new Route<T>(pathname, block);
        route.leave();
        this._routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = (event) => {
            console.log(event);
            console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
            this._onRoute(event.currentTarget.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    go(pathname: string) {
        this._history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    back() {
        if (this._routes.length > 1) {
            this._history.back();
            this._onRoute(window.location.pathname);
        }
    }

    forward() {
        const index = this._routes.indexOf(this._currentRoute);
        const maxIndex = this._routes.length - 1;
        if (index >= 0 && maxIndex > index) {
            this._history.forward();
        }
    }

    getRoute(pathname: string) {
        return this._routes.find((route) => route?.match(pathname));
    }
}
