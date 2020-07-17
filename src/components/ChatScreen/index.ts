import Block from "../../modules/block.js";
import { template } from "./template.js";
import ChatPreview, {
    IChatPreviewItem,
} from "../../blocks/ChatPreview/index.js";
import ChatMessages, {
    IChatMessageItem,
} from "../../blocks/ChatMessages/index.js";

export interface IProps {
    logo: string;
    previews: IChatPreviewItem[];
    messages: IChatMessageItem[];
}

export default class ChatScreen extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    render() {
        const chatData = {
            ...this.props,
            messages: new ChatMessages({
                messages: this.props.messages,
            }).render(),
            previews: new ChatPreview({
                previews: this.props.previews,
            }).render(),
        };
        return Handlebars.compile(template)(chatData);
    }
}
