import { Route } from "./Route.js";
import { Block } from "../modules/block.js";

type Routes = Route<any> | null;
export class Router {
    private static _instance: Router;
    private _rootQuery: string;
    private _routes: Routes[];
    private _history: History;
    private _currentRoute: Routes;

    constructor(rootQuery: string) {
        if (Router._instance) {
            return Router._instance;
        }

        this._routes = [];
        this._history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router._instance = this;
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

    use<T>(pathname: string, getBlock: () => Block<T>) {
        const route = new Route<T>(pathname, getBlock, {
            rootQuery: this._rootQuery,
        });
        this._routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = (event => {
            console.log(event);
            console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }

    go(pathname: string) {
        this._history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    back() {
        if (this._routes.length > 1) {
            this._history.back();
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
