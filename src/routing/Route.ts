import { Block } from "../modules/block";

export class Route<T> {
    private _pathname: string;
    private _block: Block<T>;

    constructor(pathname: string, block: Block<T>) {
        this._pathname = pathname;
        this._block = block;
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
        this._block.show();
    }
}
