nu_url_translate
================

chrome extension that updates the url of an electronic resource to be directed through the Northwestern University proxy (e.g., so that the full text can be accessed for paywalled content)


Installation
------------

Just clone this repository or download the source code as a zip and extract. You'll need to put the resulting `nu_url_translate` directory somewhere permanent as the extension will continue to live there as long as you're using it. Then, go to Chrome's extensions manager at `chrome://extensions`, make sure the "Developer mode" checkbox there is checked, select "Load unpacked extensions", and pick the `nu_url_translate` directory (wherever you put it).

Now you'll have a purple library in your Chrome toolbar that you can click whenever you're viewing a paywalled article you don't have access to, which should automatically give you access.

(The Makefile doesn't need to be run unless you want to regenerate the icons.)


How it works
------------

For most websites, this just changes the URL of the current tab by appending `.turing.library.northwestern.edu` to the domain, for example, changing `http://www.pnas.org/content/current` to `http://www.pnas.org.turing.library.northwestern.edu/content/current`. If the current tab is a page on APA PsycNET (e.g., APA journals), this strategy won't work, since Northwestern subscribes to these articles through `ebscohost.com` instead, so the extension redirects the current tab to the appropriate page at `ebscohost.com` (by matching the DOI). If the first URL is PsycNET's "Option to Buy" page, the redirect will take you to a PsycNET "Display Record" page, and then you'll need to use the redirect again.


Credits
-------

Icon modifed from one made by [Icomoon](http://www.icomoon.io) from [www.flaticon.com](http://www.flaticon.com), where it is licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).
