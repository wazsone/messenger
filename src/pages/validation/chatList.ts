"use strict";

function validate() {
    console.log("validate()");
    const input = document.getElementsByClassName(
        "chat-list-body-input-form"
    )[0] as HTMLInputElement;
    let message = input.value;
    console.log("input message: ", message);
    if (message.search(/<[^>]*script/i) >= 0) {
        message = "";
    }
    console.log("output message: ", message);
}

function init() {
    console.log("validationChatList.init()");
    document
        .getElementsByClassName("chat-list-body-input-send-buttom")[0]
        .addEventListener("click", validate);
}

init();
