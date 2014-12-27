/*global chrome */
function updateUrl(tab) {
    'use strict';
    var parser = document.createElement("a"), // initialize parser ('a' not important)
        doTabUpdate = function (newurl) {
            chrome.tabs.update(tab.id, {
                url: newurl
            })
        };

    if (tab.title === "PsycNET - Display Record") {
        chrome.tabs.executeScript(null, {
                file: "psycnet_dr.js"
            },
            function (result) {
                doTabUpdate(result[0]);
            });
    } else if (tab.title === "PsycNET - Option to Buy") {
        chrome.tabs.executeScript(null, {
                file: "psycnet_otb.js"
            },
            function (result) {
                doTabUpdate(result[0]);
            });
    } else {
        parser.href = tab.url;
        parser.hostname = parser.hostname + ".turing.library.northwestern.edu";
        doTabUpdate(parser.href);
    }
}

chrome.browserAction.onClicked.addListener(function (tab) {
    'use strict';
    updateUrl(tab);
});