"use strict";

function getData(statusCode) {
    let errorMessage = "Something strange has happened ;)";
    if (statusCode === "404") {
        errorMessage = "Oops! Wrong hit";
    }
    if (statusCode === "500") {
        errorMessage = "Sorry, we are already fixing";
    }
    return {
        errorCode: statusCode,
        errorMessage: errorMessage,
    };
}

function getTemplate() {
    return `<div class="base-page">
    <div class="form status-code-form">
        <div class="status-code-form-container">
            <div class="status-code-form-text">{{{errorCode}}}</div>
            <div class="status-code-form-text">{{{errorMessage}}}</div>
        </div>
        <a class="status-code-form-link" href="/">Return to chats</a>
    </div>
</div>`;
}