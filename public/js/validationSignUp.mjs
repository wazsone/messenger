"use strict";

const inputs = document.getElementsByClassName("input");

function validate() {
    console.log("validate()");
    const userSettings = {
        email: "",
        login: "",
        password: "",
        passwordAgain: "",
    };
    for (let i = 0; i < inputs.length; i++) {
        userSettings[inputs[i].getAttribute("name")] = inputs[i].value;
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

    const errorLabel = document.getElementsByClassName("error-label")[0];
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
