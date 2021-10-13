// ==UserScript==
// @name         esa.io Slide theme extension for ZEALOT
// @namespace    https://bitbucket.org/zealotinc/tampermonkey-extension/
// @version      0.2
// @author       Danny Gim<danny.gim@zealot.co.jp>
// @description  This script is to apply the esa.io slide theme for ZEALOT Inc.
// @homepage     https://bitbucket.org/zealotinc/tampermonkey-extension/
// @iconURL      https://zealot.co.jp/img/ico/favicon-32x32.png
// @updateURL    https://bitbucket.org/zealotinc/tampermonkey-extension/raw/main/esa.slide.theme/main.user.js
// @downloadURL  https://bitbucket.org/zealotinc/tampermonkey-extension/raw/main/esa.slide.theme/main.user.js
// @match        https://zealot.esa.io/posts/*/slides*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // change background color
    document.querySelector('.backgrounds').style.cssText = `
        background-color: rgb(204, 94, 0);
        background-image: url(https://zealot.co.jp/img/ico/favicon-196x196.png);
        background-repeat: no-repeat;
        background-size: 5vw;
        background-position: 1vw 1vw;
    `;

    // set slide background image
    const slideBackgrounds = document.querySelectorAll('.backgrounds .slide-background');
    document.querySelectorAll('.slides section')
        .forEach((slide, index) => {
            const bgImg = slide.querySelector('img[data-background="true"]');
            if (bgImg) {
                bgImg.style.cssText = `display: none;`;
                slideBackgrounds[index].style.cssText = `
                    background-image: url(${bgImg.src});
                    background-repeat: no-repeat;
                    background-size: cover;
                `;
            }
        });
})();
