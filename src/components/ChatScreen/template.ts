export const template = `<div class="chat-list">
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
                {{{previews}}}
            </ul>
        </div>
        <div class="chat-list-body-messages">
            <div class="chat-list-body-input">
                <div class="chat-list-body-input-container-img-form">
                    <img class="chat-list-body-preview-item-img circle" />
                    <textarea class="chat-list-body-input-form" autoFocus spellCheck
                        placeholder="Please write a message..."></textarea>
                </div>
                <button class="chat-list-body-input-send-bottom">SEND</button>
            </div>
            <ul class="chat-list-body-messages-container">
                {{{messages}}}
            </ul>
        </div>
    </main>
</div>`;
