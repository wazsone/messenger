import Block from "../../modules/block.js";
import { template } from "./template.js";
import ChatPreview, {
    IChatPreviewItem,
} from "../../blocks/ChatPreview/index.js";
import ChatMessages, {
    IChatMessageItem,
} from "../../blocks/ChatMessages/index.js";
import { initChatValidation } from "../../pages/validation/chatScreen.js";

export interface IProps {
    logo: string;
    previews: IChatPreviewItem[];
    messages: IChatMessageItem[];
}

export default class ChatScreen extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    componentDidMount() {
        setTimeout(initChatValidation, 0);
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
