"use strict";
export function handleUserSettings(_, res) {
    res.render("user-settings", {
        title: "User settings",
        inputs: [
            {
                placeholder: "Full name",
                errorMessage: "Illigal symbols",
            },
            {
                placeholder: "Login",
                errorMessage: "Illigal symbols",
            },
            {
                placeholder: "E-mail",
                errorMessage: "Wrong e-mail format",
            },
            {
                placeholder: "Old password",
                errorMessage: "Wrong password",
            },
            {
                placeholder: "New password",
                errorMessage: "Hidden block",
                className: "hidden",
            },
            {
                placeholder: "New password (again)",
                errorMessage: "Passwords are not equal",
            },
        ],
        confirmBtnName: "Change settings",
    });
}
