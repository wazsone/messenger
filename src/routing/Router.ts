import Route from "./Route.js";
import Block from "../modules/block.js";

type Routes = Route<any> | null;
export default class Router {
    static _instance: Router;
    private _rootQuery: string;
    private routes: Routes[];
    private history: History;
    private _currentRoute: Routes;

    constructor(rootQuery: string) {
        if (Router._instance) {
            return Router._instance;
        }

        this.routes = [];
        this.history = window.history;
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
        this.routes.push(route);
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
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    back() {
        if (this.routes.length > 1) {
            this.history.back();
        }
    }

    forward() {
        const index = this.routes.indexOf(this._currentRoute);
        const maxIndex = this.routes.length - 1;
        if (index >= 0 && maxIndex > index) {
            this.history.forward();
        }
    }

    getRoute(pathname: string) {
        return this.routes.find((route) => route?.match(pathname));
    }
}
