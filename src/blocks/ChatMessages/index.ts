import { Block } from "../../modules/block";
import { template } from "./template";

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
        return window.Handlebars.compile(template)(this.props);
    }
}
