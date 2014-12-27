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
