"use strict";

import { IProps } from "../components/CenteredForm/index.js";

export function getSignInData(): IProps {
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
        validationScript: "/js/src/pages/validation/signIn.js"
    };
}

export function getSignUpData(): IProps {
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
        validationScript: "/js/src/pages/validation/signUp.js"
    };
}
