// ==UserScript==
// @name         acmccs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       jingfelix
// @match        http*://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @require      https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var abstract = '';

    $('.article__body').find('p').each(function(){

        abstract += $(this).text();
    });

    if (abstract == '') {
        console.log('Failed to get abstract.');
        return;
    }

    console.log(abstract);

    GM_xmlhttpRequest({
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        url: "http://localhost:5000/abstract",
        data: JSON.stringify({
            "abstract": abstract
        }),
        onload: function(response) {
            if (response.status == 200) {
                console.log(response.responseText);
            }
            else {
                console.log('Failed to send abstract to server.');
            }
        },
        onerror: function(response) {
            console.log('Failed to send abstract to server.');
        }
    });
})();