import { Block } from "../../modules/block";
import { template } from "./template";

export interface IProps {
    name: string;
    idPrefix?: string;
}

export class Button extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    render() {
        return window.Handlebars.compile(template)(this.props);
    }
}
