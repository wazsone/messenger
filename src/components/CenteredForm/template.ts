export const template = `<div class="base-page">
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
                {{{button}}}
                <div class="margin-bottom-8px">
                    <a class="link" href="{{{link}}}">{{{linkTitle}}}</a>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="module" src="{{{validationScript}}}"></script>`;
