import { Block } from "../../modules/block";
import { template } from "./template";
import { ChatPreview, IChatPreviewItem } from "../../blocks/ChatPreview/index";
import { ChatMessages, IChatMessageItem } from "../../blocks/ChatMessages/index";
import { initChatValidation } from "../../pages/validation/chatScreen";

export interface IProps {
    logo: string;
    previews: IChatPreviewItem[];
    messages: IChatMessageItem[];
}

export class ChatScreen extends Block<IProps> {
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
        return window.Handlebars.compile(template)(chatData);
    }
}
