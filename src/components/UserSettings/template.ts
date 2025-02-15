export const template = `<div class="form">
    <h3 class="title">User settings</h3>
    <div id="user-settings-form-content" class="user-settings-form-content">
        <div class="user-settings-form-content-item">
            <img class="user-settings-avatar-img circle" />
            <a class="link user-settings-avatar-change-button" href="/upload-avatar">Change avatar</a>
        </div>
        <ul class="user-settings-form-content-item margin-bottom-8px">
            {{#each inputs}}
            <li>
                <input name="{{this.name}}" class="input padding-8px margin-bottom-4px" type="text" placeholder="{{{this.placeholder}}}" />
                <div class="hidden user-settings-error-label margin-bottom-4px">{{{this.errorMessage}}}</div>
            </li>
            {{/each}}
            <li class="form-content-clickable-items">
                {{{button}}}
            </li>
        </ul>
    </div>
</div>`;
