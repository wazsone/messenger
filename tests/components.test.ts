import { IProps as IButtonProps, Button } from "../src/blocks/Button";
import * as Handlebars from "handlebars";

window.Handlebars = Handlebars;

function getExpectedButton(props: IButtonProps) {
    return `<div>
    <button id="${props.idPrefix ?? ""}confirm-button" class="confirm-button padding-8px margin-bottom-8px">${props.name}</button>
</div>`;
}

describe("Button must be rendered", () => {
    it("Create button with name", () => {
        const props: IButtonProps = {
            name: "testButton1"
        }
        expect(new Button(props).render()).toEqual(getExpectedButton(props));
    });
    it("Create button with name and prefixId", () => {
        const props: IButtonProps = {
            name: "testButton2",
            idPrefix: "testPrefix"
        }
        expect(new Button(props).render()).toEqual(getExpectedButton(props));
    });
});