import { Block } from "../../modules/block.js";

interface IProps { }

const template = `
<div>Hello, my comrad!!!</div>
    <div>
        Pages:
    <ul>
        <li><a href="/error/404">404</a></li>
        <li><a href="/error/500">500</a></li>
        <li><a href="/sign-in">sign-in</a></li>
        <li><a href="/sign-up">sign-up</a></li>
        <li><a href="/user-settings">user-settings</a></li>
        <li><a href="/chat-screen">chat-screen</a></li>
    </ul>
</div>`;

export class IndexPage extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    render() {
        return Handlebars.compile(template)({});
    }
}
