import { renderDOM } from "../utils/renderUtils.js";
import { Block } from "../modules/block.js";

interface IRouteProps {
    rootQuery: string;
}

export class Route<T> {
    private _pathname: string;
    private _getBlock: () => Block<T>;
    private _block: Block<T> | null;
    private _props: IRouteProps;

    constructor(
        pathname: string,
        getBlock: () => Block<T>,
        props: IRouteProps
    ) {
        this._pathname = pathname;
        this._getBlock = getBlock;
        this._props = props;
        this._block = null;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return this._pathname === pathname;
    }

    render() {
        if (!this._block) {
            this._block = this._getBlock();
            renderDOM<T>(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}
