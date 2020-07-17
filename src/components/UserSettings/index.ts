import Block from "../../modules/block.js";
import { template } from "./template.js";
import Button from "../../blocks/Button/index.js";

interface IUserSettingsInput {
    name: string;
    placeholder: string;
    errorMessage: string;
}

export interface IProps {
    inputs: IUserSettingsInput[];
    confirmBtnName: string;
}

export default class UserSettings extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    render() {
        const userSettingsData = {
            ...this.props,
            button: new Button({ name: this.props.confirmBtnName }).render(),
        };
        return Handlebars.compile(template)(userSettingsData);
    }
}
