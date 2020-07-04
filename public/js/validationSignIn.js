"use strict";
import { registeredUsers } from "./testData.js";

const inputs = document.getElementsByClassName("input");

function validate() {
    console.log("validate()");
    const currentUser = { login: "", password: "" };
    for (let i = 0; i < inputs.length; i++) {
        currentUser[inputs[i].getAttribute("name")] = inputs[i].value;
    }
    console.log("validate.currentUser:");
    console.log(currentUser);
    const errorLabel = document.getElementsByClassName("error-label")[0];
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
    console.log("init()");

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
