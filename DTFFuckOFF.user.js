// ==UserScript==
// @name        DTF FuckOFF
// @match       https://dtf.ru/*
// @version     0.1  (2021-08-01)
// @license     MIT
// @author      KekW - https://dtf.ru/u/182912-kekw
// @description В пизду DTF.
// @run-at      document-end
// ==/UserScript==

let loc = window.location;
if (loc.toString().indexOf('.ru/u/') >= 0) {
    return;
}

function someFuckingMagic()
{
    let commPinned = document.querySelectorAll('.comments__pinned');
    if (commPinned) {
        commPinned.forEach(function(commP) {
            commP.remove();
        });
    }

    if (document.getElementsByClassName('comments')[0]) {
        document.getElementsByClassName('comments')[0].parentNode.remove();
    }
}

addEventListener('DOMContentLoaded', function() {
    someFuckingMagic();
});

addEventListener('DOMNodeInserted', function() {
    someFuckingMagic();
});
