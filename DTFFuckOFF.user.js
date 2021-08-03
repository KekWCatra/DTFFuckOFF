// ==UserScript==
// @name        DTF FuckOFF
// @match       https://dtf.ru/*
// @version     0.2  (2021-08-02)
// @license     MIT
// @author      KekW - https://dtf.ru/u/182912-kekw
// @description В пизду DTF.
// @run-at      document-end
// ==/UserScript==

function someFuckingMagic()
{
    let loc = window.location;
    if (loc.toString().indexOf('.ru/u/') >= 0) {
        return;
    }

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

function goblinsDoTheirJob()
{
    document.querySelectorAll('.layout__right-column a:not([href*=".ru/u/"]):not([class=""])').forEach(function(commP) {
        commP.parentNode.style.display = 'none';
    });
}

addEventListener('DOMContentLoaded', function() {
    someFuckingMagic();
    goblinsDoTheirJob();
});

addEventListener('DOMNodeInserted', function() {
    someFuckingMagic();
    goblinsDoTheirJob();
});
