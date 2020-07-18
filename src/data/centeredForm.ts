"use strict";

import { IProps } from "../components/CenteredForm/index.js";
import { initSignUpValidation } from "../pages/validation/signUp.js";
import { initSignInValidation } from "../pages/validation/signIn.js";

export function getSignInData(): IProps {
    return {
        formClassname: "sign-in-form",
        formLabel: "Sign In",
        inputs: [
            { name: "login", placeholder: "Login" },
            { name: "password", placeholder: "Password" },
        ],
        errorMessage: "Wrong login/password",
        confirmBtnName: "Sign In",
        linkTitle: "Don't have an account?",
        link: "/sign-up",
        initValidation: initSignInValidation
    };
}

export function getSignUpData(): IProps {
    return {
        formClassname: "sign-up-form",
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
        link: "sign-in",
        initValidation: initSignUpValidation
    };
}
