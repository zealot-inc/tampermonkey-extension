// ==UserScript==
// @name         esa.io Slide theme extension for ZEALOT
// @namespace    https://github.com/zealot-inc/tampermonkey-extension/
// @version      0.3.0
// @author       Danny Gim<danny.gim@zealot.co.jp>
// @description  This script is to apply the esa.io slide theme for ZEALOT Inc.
// @homepage     https://github.com/zealot-inc/tampermonkey-extension/
// @iconURL      https://zealot.co.jp/img/ico/favicon-32x32.png
// @updateURL    https://github.com/zealot-inc/tampermonkey-extension/raw/main/esa.slide.theme/main.user.js
// @downloadURL  https://github.com/zealot-inc/tampermonkey-extension/raw/main/esa.slide.theme/main.user.js
// @match        https://zealot.esa.io/posts/*/slides*
// @resource     zealot_css https://github.com/zealot-inc/tampermonkey-extension/raw/main/esa.slide.theme/style.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // load custom CSS
    // @see https://github.com/Tampermonkey/tampermonkey/issues/835
    const zealotCss = GM_getResourceText('zealot_css');
    GM_addStyle(zealotCss);

    // set slide background image
    const slideBackgrounds = document.querySelectorAll('.backgrounds .slide-background');
    document.querySelectorAll('.slides section')
        .forEach((slide, index) => {
            const bgImg = slide.querySelector('img[data-background="true"]');
            if (bgImg) {
                bgImg.classList.add('zealot-style');
                slide.querySelector('h2').classList.add('zealot-style');

                slideBackgrounds[index].style.cssText = `
                    background-image: url(${bgImg.src});
                `;
            }
        });
})();
