import { Block } from "../../modules/block.js";
import { template } from "./template.js";

export interface IChatMessageItem {
    author: string;
    date: string;
    message: string;
}

interface IProps {
    messages: IChatMessageItem[];
}

export class ChatMessages extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
