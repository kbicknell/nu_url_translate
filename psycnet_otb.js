function matchRegExpInSomeScript(reString) {
    'use strict';
    var re = new RegExp(reString),
        m = document.getElementsByTagName('script');
    for (var i = 0; i < m.length; i++) {
        var this_script = m[i].innerHTML;
        if (re.test(this_script)) {
            return this_script.match(re)[1];
        }
    }
}
matchRegExpInSomeScript("var productUrl = '(.+)';");
