"use strict";

export function getSignInData() {
    return {
        formLabel: "Sign In",
        inputs: [
            { name: "login", placeholder: "Login" },
            { name: "password", placeholder: "Password" },
        ],
        errorMessage: "Wrong login/password",
        confirmBtnName: "Sign In",
        linkTitle: "Don't have an account?",
        link: "sign-up.html",
    };
}

export function getSignUpData() {
    return {
        formLabel: "Sign Up",
        inputs: [
            { name: "email", placeholder: "E-mail" },
            { name: "login", placeholder: "Login" },
            { name: "password", placeholder: "Password" },
            { name: "passwordAgain", placeholder: "Password (again)" },
        ],
        errorMessage: "Passwords are not equal",
        confirmBtnName: "Sign Up",
        linkTitle: "Sign In",
        link: "sign-in.html",
    };
}
