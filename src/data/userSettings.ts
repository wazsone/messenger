"use strict";

export function getData() {
    return {
        inputs: [
            {
                name: "fullName",
                placeholder: "Full name",
                errorMessage: "Illigal symbols",
            },
            {
                name: "login",
                placeholder: "Login",
                errorMessage: "Illigal symbols",
            },
            {
                name: "email",
                placeholder: "E-mail",
                errorMessage: "Wrong e-mail",
            },
            {
                name: "oldPassword",
                placeholder: "Old password",
                errorMessage: "Wrong password",
            },
            {
                name: "newPassword",
                placeholder: "New password",
                errorMessage: "Illigal symbols",
            },
            {
                name: "newPasswordAgain",
                placeholder: "New password (again)",
                errorMessage: "Passwords are not equal",
            },
        ],
        confirmBtnName: "Change settings",
    };
}