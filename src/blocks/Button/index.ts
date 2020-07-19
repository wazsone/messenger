import { Block } from "../../modules/block.js";
import { template } from "./template.js";

interface IProps {
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
