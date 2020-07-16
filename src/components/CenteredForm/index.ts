import Block from "../../modules/block.js";
import { template } from "./template.js";
import Button from "../../blocks/Button/index.js";

interface ISignFormInput {
    name: string;
    placeholder: string;
}

interface IProps {
    formLabel: string;
    inputs: ISignFormInput[];
    errorMessage: string;
    confirmBtnName: string;
    link: string;
    linkTitle: string;
}

export default class CenteredForm extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    render() {
        const formData = {
            ...this.props,
            button: new Button({ name: this.props.confirmBtnName }).render(),
        };
        return Handlebars.compile(template)(formData);
    }
}
