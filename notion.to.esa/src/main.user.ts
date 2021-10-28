const ESA_API_BASE = 'https://api.esa.io/v1';

const CLIENT_ID = 'spVekAMwHbOr6TFgxZUcLCe0twsd4CRlwWcIbWiUyIA';
const CLIENT_SECRET = '-RH3a3owAvJgUT1E13VvcR_c-9l1AgaGuIrm6SCtHa8';
const REDIRECT_URI = 'urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob';
const SCOPE = 'read+write';

const KEY_NOTION_TOKEN = 'key.notion.token';
const KEY_ESA_TOKEN = 'key.esa.token';
const KEY_ESA_CATEGORY = 'key.esa.category';

type EsaPost = {
    name: string;
    category: string;
    tags: string[];
    body_md: string;
    wip: boolean;
}

type EsaPostBody = {
    post: EsaPost;
}


function appendEsaButtonToNotion() {
    console.log(`called appendEsaButtonToNotion`);
    const esaButton = `<div class="n2e-notion-topbar-esa-button notion-focusable" role="button" aria-label="Comments" tabindex="0" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; border-radius: 3px; height: 28px; width: 33px; padding: 0px; margin-right: 2px;"><img src="https://assets.esa.io/assets/apple-touch-icon-7c260bd4980261ef7ae6080ae84ca5f414adf61219a3790cc7eb95836ce05f9e.png" style="width: 28px; height: 28px;"></div>`;
    const firstButton = document.querySelector('.notion-topbar-action-buttons div[role="button"]:nth-child(1)');
    firstButton?.insertAdjacentHTML('beforebegin', esaButton);
    document.querySelector('.n2e-notion-topbar-esa-button ')?.addEventListener('click', esaButtonClickHandler);
}

function esaButtonClickHandler(e: Event) {
    e.preventDefault();

    // notion token
    let notionToken: string | undefined = GM_getValue<string>(KEY_NOTION_TOKEN);

    if (!notionToken) {
        let newToken = prompt('Please input notion access token');
        if (newToken) {
            GM_setValue(KEY_NOTION_TOKEN, newToken);
            notionToken = newToken;
        }
    }
    console.log(`notion token=${notionToken}`);


    // esa token
    let esaToken: string | undefined = GM_getValue<string>(KEY_ESA_TOKEN);

    if (!esaToken) {
        let newToken = prompt('Please input esa access token');
        if (newToken) {
            GM_setValue(KEY_ESA_TOKEN, newToken);
            esaToken = newToken;
        }
    }
    console.log(`esa token=${esaToken}`);

    // esa category
    let esaCategory: string | undefined | null = GM_getValue<string>(KEY_ESA_CATEGORY);
    esaCategory = prompt('Please input esa category');
    GM_setValue(KEY_ESA_CATEGORY, esaCategory);
    console.log(`esa category=${esaCategory}`);

    // post body
    const postBody: EsaPostBody = {
        post: {
            name: 'title',
            category: esaCategory || '',
            tags: [],
            body_md: 'test',
            wip: true,
        }
    }
    console.log(JSON.stringify(postBody, null, 2));
}

setTimeout(() => {
    appendEsaButtonToNotion();
}, 1000);