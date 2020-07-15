"use strict";

const inputs = document.getElementsByClassName("input") as HTMLCollectionOf<HTMLInputElement>;

export interface IUserSettings {
    email: string,
    login: string,
    password: string,
    passwordAgain: string,
};

function validate() {
    console.log("validate()");
    const userSettings: IUserSettings = {
        email: "",
        login: "",
        password: "",
        passwordAgain: "",
    };
    for (let i = 0; i < inputs.length; i++) {
        const attr = inputs[i].getAttribute("name");
        if (attr && Object.keys(userSettings).includes(attr)) {
            userSettings[attr] = inputs[i].value;
        }
    }
    console.log("validate.userSettings:");
    console.log(userSettings);
    let hasEmptyInput = false;
    for (const key in userSettings) {
        if (userSettings.hasOwnProperty(key) && userSettings[key] === "") {
            hasEmptyInput = true;
            break;
        }
    }

    const errorLabel = document.getElementsByClassName("error-label")[0] as HTMLLabelElement;
    if (
        !hasEmptyInput &&
        userSettings.password === userSettings.passwordAgain
    ) {
        console.log("validate, Success!");
        if (!errorLabel.classList.contains("hidden")) {
            errorLabel.classList.add("hidden");
        }
        return;
    }

    console.log("validate, Failed!");
    errorLabel.classList.remove("hidden");
}

function init() {
    console.log("validationSignUp.init()");

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
