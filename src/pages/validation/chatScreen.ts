"use strict";

let chatInput = document.getElementsByClassName(
    "chat-list-body-input-form"
)[0] as HTMLInputElement;

function validate() {
    console.log("validate()");
    let message = chatInput.value;
    console.log("input message: ", message);
    if (message.search(/<[^>]*script/i) >= 0) {
        message = "";
    }
    console.log("output message: ", message);
}

export function initChatValidation() {
    console.log("validationChatList.init()");
    chatInput = document.getElementsByClassName(
        "chat-list-body-input-form"
    )[0] as HTMLInputElement;
    document
        .getElementsByClassName("chat-list-body-input-send-bottom")[0]
        .addEventListener("click", validate);
}
