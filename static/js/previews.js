function getPreviewsTemplate() {
    return `{{#each previews}}
    <li class="chat-list-body-preview-item padding-8px">
        <img class="chat-list-body-preview-item-img circle" />
        <div class="chat-list-body-preview-item-msg">
            <span>{{{this.title}}}</span>
            <div class="text-overflow-ellipsis">
                {{{this.author}}}: {{{this.message}}}
            </div>
        </div>
    </li>
{{/each}}`;
}
