function getMetaContents(mn) {
    'use strict';
    var m = document.getElementsByTagName('meta');
    for (var i in m) {
        if (m[i].name == mn) {
            return m[i].content;
        }
    }
}

getMetaContents("citation_doi");
