import { Block } from "../../modules/block";
import { template } from "./template";
import { Button } from "../../blocks/Button/index";

interface ISignFormInput {
    name: string;
    placeholder: string;
}

export interface IProps {
    formClassname: string;
    formLabel: string;
    inputs: ISignFormInput[];
    errorMessage: string;
    confirmBtnName: string;
    link: string;
    linkTitle: string;
    initValidation: (className: string) => void;
}

export class CenteredForm extends Block<IProps> {
    constructor(props: IProps) {
        super("div", props);
    }

    componentDidMount() {
        const { formClassname, initValidation } = this.props;
        setTimeout(() => initValidation(formClassname), 0);
    }

    render() {
        const { confirmBtnName, formClassname } = this.props;
        const formData = {
            ...this.props,
            button: new Button({ name: confirmBtnName, idPrefix: formClassname }).render(),
            errorLabelIdPrefix: formClassname,
        };
        return window.Handlebars.compile(template)(formData);
    }
}
