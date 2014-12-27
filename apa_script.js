function getMetaContents(mn) {
    'use strict';
    var m = document.getElementsByTagName('meta'),
        i;
    for (i = 0; i < m.length; i++) {
        if (m[i].name === mn) {
            return m[i].content;
        }
    }
}

getMetaContents("citation_doi");
