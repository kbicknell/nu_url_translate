function updateUrl(tab) {
    if (tab.title === "PsycNET - Display Record") {
        var newurl = ''
        chrome.tabs.executeScript(null, {
                file: "apa_script.js"
            },
            function (result) {
                newurl = "http://search.ebscohost.com.turing.library.northwestern.edu/login.aspx?direct=true&db=pdh&bquery=DI+" + result[0] + "&type=1&site=ehost-live";
            });
        setTimeout(function () {
            chrome.tabs.update(tab.id, {
                url: newurl
            });
        }, 100);
    } else if (tab.title === "PsycNET - DOI Landing page") {
        var doi = tab.url.substring(tab.url.indexOf('doi=') + 4);
        //alert(doi);
        var newurl = "http://search.ebscohost.com.turing.library.northwestern.edu/login.aspx?direct=true&db=pdh&bquery=DI+" + doi + "&type=1&site=ehost-live";
        //alert(url);
        chrome.tabs.update(tab.id, {
            url: newurl
        });
        //alert("hi");
    } else {
        var parser = document.createElement("a");
        parser.href = tab.url;
        parser.hostname = parser.hostname + ".turing.library.northwestern.edu";
        chrome.tabs.update(tab.id, {
            url: parser.href
        });
    }
}

chrome.browserAction.onClicked.addListener(function (tab) {
    updateUrl(tab);
});