/**

This script assumes the current page is a PsycNET "Display Record" page and generates a URL from which the paywalled paper referenced there can be retrieved through Northwestern's journal subscriptions. It does this by extracting the DOI from the page's meta content.

*/

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

var doi = getMetaContents("citation_doi");
"http://search.ebscohost.com.turing.library.northwestern.edu/login.aspx?direct=true&db=pdh&bquery=DI+" + doi + "&type=1&site=ehost-live";