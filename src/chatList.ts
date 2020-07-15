"use strict";

export function getData() {
    return {
        logo: "Logo",
        previews: [
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                title: "Title",
                author: "Username",
                message:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
        ],
        messages: [
            {
                author: "User 1",
                date: "10:54:55",
                text:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
            {
                author: "User 2",
                date: "10:54:55",
                text:
                    "Sooo long message, let's do it bro, let's write a long long message)",
            },
        ],
    };
}

export function getTemplate(previewsTemplate: string, messagesTemplate: string) {
    return `<div class="chat-list">
    <header class="chat-list-header">
        <div class="padding-8px">{{{logo}}}</div>
        <div class="padding-8px">Menu</div>
    </header>
    <main class="chat-list-body">
        <div class="chat-list-body-preview">
            <div class="chat-list-body-preview-search">
                <input class="input padding-8px margin-8px" type="text" placeholder="Search" />
            </div>
            <ul class="chat-list-body-preview-list">
                ${previewsTemplate}
            </ul>
        </div>
        <div class="chat-list-body-messages">
            <div class="chat-list-body-input">
                <div class="chat-list-body-input-container-img-form">
                    <img class="chat-list-body-preview-item-img circle" />
                    <textarea class="chat-list-body-input-form" autoFocus spellCheck
                        placeholder="Please write a message..."></textarea>
                </div>
                <button class="chat-list-body-input-send-buttom">SEND</button>
            </div>
            <ul class="chat-list-body-messages-container">
                ${messagesTemplate}
            </ul>
        </div>
    </main>
</div>`;
}