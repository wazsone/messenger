"use strict";

import { ArrayUtils } from "../../utils/arrayUtils.js";

let userSettingsInputs: NodeListOf<HTMLInputElement>;
let userSettingsErrorLabels: HTMLCollectionOf<HTMLLabelElement>;

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
    for (let i = 0; i < userSettingsInputs?.length; i++) {
        const attr = userSettingsInputs[i].getAttribute("name");
        if (userSettingsInputs[i].value.search(/<[^>]*script/i) < 0) {
            if (attr && Object.keys(userSettings).includes(attr)) {
                userSettings[attr] = userSettingsInputs[i].value;
            }
            if (userSettingsErrorLabels && !userSettingsErrorLabels[i]?.classList.contains("hidden")) {
                userSettingsErrorLabels[i]?.classList.add("hidden");
            }
        } else {
            if (attr && Object.keys(userSettings).includes(attr)) {
                userSettings[attr] = "";
            }
            if (userSettingsErrorLabels && userSettingsErrorLabels[i].classList.contains("hidden")) {
                userSettingsErrorLabels[i].classList.remove("hidden");
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
    const passwordErrorLabel = ArrayUtils.last(Array.from(userSettingsErrorLabels));
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

export function initUserSettingsValidation(confirmBtnName: string) {
    console.log("validationUserSettings.init()");
    userSettingsInputs = document
        .getElementById("user-settings-form-content")
        ?.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
    userSettingsErrorLabels = document.getElementsByClassName(
        "user-settings-error-label"
    ) as HTMLCollectionOf<HTMLLabelElement>;
    for (let i = 0; i < userSettingsInputs?.length; i++) {
        userSettingsInputs[i].onblur = () => {
            console.log(`${userSettingsInputs[i].name}.onblur()`);
            if (userSettingsInputs[i].value === "") {
                userSettingsInputs[i].classList.add("invalid");
            }
        };
        userSettingsInputs[i].onfocus = () => {
            console.log(`${userSettingsInputs[i].name}.onfocus()`);
            if (userSettingsInputs[i].classList.contains("invalid")) {
                userSettingsInputs[i].classList.remove("invalid");
            }
        };
    }

    document
        .getElementById(`${confirmBtnName}confirm-button`)
        ?.addEventListener("click", validate);
}
