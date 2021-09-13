// ==UserScript==
// @name         esa.io Slide theme for ZEALOT
// @namespace    https://bitbucket.org/zealotinc/tampermonkey-extension/
// @version      0.1
// @author       Danny Gim<danny.gim@zealot.co.jp>
// @description  This script is to apply the esa.io slide theme for ZEALOT Inc.
// @homepage     https://bitbucket.org/zealotinc/tampermonkey-extension/
// @iconURL      https://zealot.co.jp/img/ico/favicon-32x32.png
// @updateURL    https://bitbucket.org/zealotinc/tampermonkey-extension/raw/main/esa.slide.theme/main.js
// @downloadURL  https://bitbucket.org/zealotinc/tampermonkey-extension/raw/main/esa.slide.theme/main.js
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
})();