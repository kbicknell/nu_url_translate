function getMetaContents(mn) {
    var m = document.getElementsByTagName('meta');
    for (var i in m) {
        if (m[i].name == mn) {
            return m[i].content;
        }
    }
}

var citation_doi = getMetaContents("citation_doi");

citation_doi