/**

This script assumes the current page is a PsycNET "Option to Buy" page and generates the URL of its "Display record" page (from which the other scripts included here can retrieve the paper). It does this by finding the URL directly specified in a piece of javascript.

*/

function matchRegExpInSomeScript(reString) {
    'use strict';
    var re = new RegExp(reString),
        m = document.getElementsByTagName('script'),
        i,
        this_script;
    for (i = 0; i < m.length; i++) {
        this_script = m[i].innerHTML;
        if (re.test(this_script)) {
            return this_script.match(re)[1];
        }
    }
}

matchRegExpInSomeScript("var productUrl = '(.+)';");
