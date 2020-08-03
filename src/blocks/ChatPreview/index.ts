import { Block } from "../../modules/block";
import { template } from "./template";

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
        return window.Handlebars.compile(template)(this.props);
    }
}
