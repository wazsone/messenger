"use strict";

import { registeredUsers } from "./testData.js";

export interface IUserLogin {
    login: string;
    password: string;
}

const inputs = document.getElementsByClassName("input") as HTMLCollectionOf<HTMLInputElement>;

function validate() {
    console.log("validate()");
    const currentUser: IUserLogin = { login: "", password: "" };
    for (let i = 0; i < inputs.length; i++) {
        const attr = inputs[i].getAttribute("name");
        if (attr && Object.keys(currentUser).includes(attr)) {
            currentUser[attr] = inputs[i].value;
        }
    }
    console.log("validate.currentUser:");
    console.log(currentUser);
    const errorLabel = document.getElementsByClassName("error-label")[0] as HTMLLabelElement;
    for (const user of registeredUsers) {
        if (
            user.login === currentUser.login &&
            user.password === currentUser.password
        ) {
            console.log("validate, Success!");
            if (!errorLabel.classList.contains("hidden")) {
                errorLabel.classList.add("hidden");
            }
            return;
        }
    }
    console.log("validate, Failed!");
    errorLabel.classList.remove("hidden");
}

function init() {
    console.log("validationSignIn.init()");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onblur = () => {
            console.log(`${inputs[i].name}.onblur()`);
            if (inputs[i].value === "") {
                inputs[i].classList.add("invalid");
            }
        };
        inputs[i].onfocus = () => {
            console.log(`${inputs[i].name}.onfocus()`);
            if (inputs[i].classList.contains("invalid")) {
                inputs[i].classList.remove("invalid");
            }
        };
    }

    document
        .getElementsByClassName("confirm-button")[0]
        .addEventListener("click", validate);
}

init();
