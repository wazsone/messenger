import { Block } from "../../modules/block";
import { template } from "./template";
import { Button } from "../../blocks/Button/index";
import { initUserSettingsValidation } from "../../pages/validation/userSettings";

interface IUserSettingsInput {
    name: string;
    placeholder: string;
    errorMessage: string;
}

export interface IProps {
    inputs: IUserSettingsInput[];
    confirmBtnName: string;
}

export class UserSettings extends Block<IProps> {
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
        return window.Handlebars.compile(template)(userSettingsData);
    }
}
