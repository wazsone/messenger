import Block from "../../modules/block.js";
import { template } from "./template.js";

interface IProps {
    name: string;
    idPrefix?: string;
}

export default class Button extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
