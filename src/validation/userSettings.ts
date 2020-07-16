"use strict";

import ArrayUtils from "../utils/arrayUtils.js";

const inputs = document.getElementsByClassName("input") as HTMLCollectionOf<HTMLInputElement>;

function validate() {
    console.log("validate()");
    const userSettings = {
        fullName: "",
        email: "",
        login: "",
        oldPassword: "",
        newPassword: "",
        newPasswordAgain: "",
    };
    const errorLabels = document.getElementsByClassName(
        "user-settings-error-label"
    ) as HTMLCollectionOf<HTMLLabelElement>;
    for (let i = 0; i < inputs.length; i++) {
        const attr = inputs[i].getAttribute("name");
        if (inputs[i].value.search(/<[^>]*script/i) < 0) {
            if (attr && Object.keys(userSettings).includes(attr)) {
                userSettings[attr] = inputs[i].value;
            }
            if (!errorLabels[i].classList.contains("hidden")) {
                errorLabels[i].classList.add("hidden");
            }
        } else {
            if (attr && Object.keys(userSettings).includes(attr)) {
                userSettings[attr] = "";
            }
            if (errorLabels[i].classList.contains("hidden")) {
                errorLabels[i].classList.remove("hidden");
            }
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

    const passwordErrorLabel = ArrayUtils.last(Array.from(errorLabels));
    if (
        !hasEmptyInput &&
        userSettings.newPassword === userSettings.newPasswordAgain
    ) {
        console.log("validate, Success!");
        if (passwordErrorLabel && !passwordErrorLabel.classList.contains("hidden")) {
            passwordErrorLabel.classList.add("hidden");
        }
        return;
    }

    console.log("validate, Failed!");
    passwordErrorLabel && passwordErrorLabel.classList.remove("hidden");
}

function init() {
    console.log("validationUserSettings.init()");

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
