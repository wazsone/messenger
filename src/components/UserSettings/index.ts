import Block from "../../modules/block.js";
import { template } from "./template.js";
import Button from "../../blocks/Button/index.js";
import { initUserSettingsValidation } from "../../pages/validation/userSettings.js";

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

    componentDidMount() {
        setTimeout(() => initUserSettingsValidation(this.props.confirmBtnName), 0);
    }

    render() {
        const { confirmBtnName } = this.props;
        const userSettingsData = {
            ...this.props,
            button: new Button({ name: confirmBtnName, idPrefix: confirmBtnName }).render(),
        };
        return Handlebars.compile(template)(userSettingsData);
    }
}
