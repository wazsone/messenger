import { Block } from "../../modules/block.js";
import { template } from "./template.js";

export interface IProps {
    errorCode: string;
    errorMessage: string;
}

export class Error extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    render() {
        return window.Handlebars.compile(template)(this.props);
    }
}
