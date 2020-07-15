export function getMessagesTemplate() {
    return `{{#each messages}}
    <li class="message-container padding-8px">
        <img class="chat-list-body-preview-item-img circle" />
        <div class="message-container-author-date-text">
            <div class="message-container-author-date">
                <span>{{{this.author}}}</span>
                <span class="message-date">{{{this.date}}}</span>
            </div>
            <div class="message-text">{{{this.text}}}</div>
        </div>
    </li>
{{/each}}`;
}
