import { Block } from "../../modules/block.js";
import { template } from "./template.js";

export interface IChatPreviewItem {
    title: string;
    author: string;
    message: string;
}

interface IProps {
    previews: IChatPreviewItem[];
}

export class ChatPreview extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)(this.props);
    }
}
