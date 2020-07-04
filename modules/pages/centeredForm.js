"use strict";
export function handleSignIn(_, res) {
    res.render("common/centered-form", {
        title: "Sign In",
        placeholders: ["Login", "Password"],
        errorMessage: "Wrong login/password",
        confirmBtnName: "Sign In",
        linkTitle: "Don't have an account?",
        link: "/sign-up",
    });
}

export function handleSignUp(_, res) {
    res.render("common/centered-form", {
        title: "Sign Up",
        placeholders: ["E-mail", "Login", "Password", "Password (again)"],
        errorMessage: "Passwords are not equal",
        confirmBtnName: "Sign Up",
        linkTitle: "Sign In",
        link: "/sign-in",
    });
}