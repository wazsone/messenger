"use strict";

import ArrayUtils from "./utils/arrayUtils.mjs";

const inputs = document.getElementsByClassName("input");

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
    );
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.search(/<[^>]*script/i) < 0) {
            userSettings[inputs[i].getAttribute("name")] = inputs[i].value;
            if (!errorLabels[i].classList.contains("hidden")) {
                errorLabels[i].classList.add("hidden");
            }
        } else {
            userSettings[inputs[i].getAttribute("name")] = "";
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

    const passwordErrorLabel = ArrayUtils.last(errorLabels);
    if (
        !hasEmptyInput &&
        userSettings.newPassword === userSettings.newPasswordAgain
    ) {
        console.log("validate, Success!");
        if (!passwordErrorLabel.classList.contains("hidden")) {
            passwordErrorLabel.classList.add("hidden");
        }
        return;
    }

    console.log("validate, Failed!");
    passwordErrorLabel.classList.remove("hidden");
}

function init() {
    console.log("validationUserSettings.init()");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onblur = function () {
            console.log(`${this.name}.onblur()`);
            if (this.value === "") {
                this.classList.add("invalid");
            }
        };
        inputs[i].onfocus = function () {
            console.log(`${this.name}.onfocus()`);
            if (this.classList.contains("invalid")) {
                this.classList.remove("invalid");
            }
        };
    }

    document
        .getElementsByClassName("confirm-button")[0]
        .addEventListener("click", validate);
}

init();
