nu_url_translate
================

chrome extension that updates the url of an electronic resource to be directed through the NU proxy (e.g., so that the full text can be accessed for paywalled content)

For most websites, this just changes the URL of the current tab by appending `.turing.library.northwestern.edu` to the domain, for example, changing `http://www.pnas.org/content/current` to `http://www.pnas.org.turing.library.northwestern.edu/content/current`. If the current tab is a page on PsycNET (e.g., APA journals), this strategy won't work, since Northwestern subscribes to these articles through `ebscohost.com` instead, so the extension redirects the current tab to the appropriate page at `ebscohost.com` (by matching the DOI).


Installation
------------

Just clone this repository or download the source code as a zip and extract. Then, in Chrome, select "Load unpacked extensions" in `chrome://extensions` and pick the `nu_url_translate` directory. In Windows, this may require checking the "Developer mode" checkbox.

The Makefile doesn't need to be run unless you want to regenerate the icons.


Credits
-------

Icon modifed from one made by [Icomoon](http://www.icomoon.io) from [www.flaticon.com](http://www.flaticon.com) is licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).
