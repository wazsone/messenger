"use strict";

export interface ISignInAttribute {
    name: "string";
    placeholder: "string";
}

export function getSignInData() {
    return {
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
        inputs: [
            { name: "email", placeholder: "E-mail" },
            { name: "login", placeholder: "Login" },
            { name: "password", placeholder: "Password" },
            { name: "passwordAgain", placeholder: "Password (again)" },
        ],
        placeholders: ["E-mail", "Login", "Password", "Password (again)"],
        errorMessage: "Passwords are not equal",
        confirmBtnName: "Sign Up",
        linkTitle: "Sign In",
        link: "sign-in.html",
    };
}

export function getTemplate(confirmButtonTemplate: string) {
    return `<div class="base-page">
    <div class="form sign-in-form">
        <div class="base-label form-logo-label margin-8px">Logo</div>
        <div class="form-content">
            <div class="base-label">{{{formLabel}}}</div>
            <div class="form-inputs">
                {{#each inputs}}
                <input name="{{this.name}}" class="input padding-8px margin-bottom-8px" type="text" placeholder="{{this.placeholder}}" />
                {{/each}}
                <div class="hidden error-label">
                    {{{errorMessage}}}
                </div>
            </div>
            <div class="form-content-clickable-items">
                ${confirmButtonTemplate}
                <div class="margin-bottom-8px">
                    <a class="link" href="{{{link}}}">{{{linkTitle}}}</a>
                </div>
            </div>
        </div>
    </div>
</div>`;
}
