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

export function getTemplate(confirmButtonTemplate: string) {
    return `<div class="form">
    <h3 class="title">User settings</h3>
    <div class="user-settings-form-content">
        <div class="user-settings-form-content-item">
            <img class="user-settings-avatar-img circle" />
            <a class="link user-settings-avatar-change-button" href="">Change avatar</a>
        </div>
        <ul class="user-settings-form-content-item margin-bottom-8px">
            {{#each inputs}}
            <li>
                <input name="{{this.name}}" class="input padding-8px margin-bottom-4px" type="text" placeholder="{{{this.placeholder}}}" />
                <div class="hidden user-settings-error-label margin-bottom-4px">{{{this.errorMessage}}}</div>
            </li>
            {{/each}}
            <li class="form-content-clickable-items">
                ${confirmButtonTemplate}
            </li>
        </ul>
    </div>
</div>`;
}