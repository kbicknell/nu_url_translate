/*global chrome */
function updateUrl(tab) {
    'use strict';
    var newurl = '',
        parser;
    if (tab.title === "PsycNET - Display Record") {
        chrome.tabs.executeScript(null, {
                file: "psycnet_dr.js"
            },
            function (result) {
                newurl = result[0];
            });
    } else if (tab.title === "PsycNET - Option to Buy") {
        chrome.tabs.executeScript(null, {
                file: "psycnet_otb.js"
            },
            function (result) {
                newurl = result[0];
            });
    } else {
        parser = document.createElement("a");
        parser.href = tab.url;
        parser.hostname = parser.hostname + ".turing.library.northwestern.edu";
        newurl = parser.href;
    }
    
    setTimeout(function () {
        chrome.tabs.update(tab.id, {
            url: newurl
        });
    }, 100);
}

chrome.browserAction.onClicked.addListener(function (tab) {
    'use strict';
    updateUrl(tab);
});