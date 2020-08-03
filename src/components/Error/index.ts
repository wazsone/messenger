import { Block } from "../../modules/block";
import { template } from "./template";

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
