// ==UserScript==
// @name         Swap bfl Classes with flag flag-il
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Replace any bfl bfl-XX classes with flag flag-il on 4chan boards
// @author       You
// @match        *://boards.4chan.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select all elements that have classes starting with "bfl bfl-"
    var elements = document.querySelectorAll('[class*="bfl bfl-"]');

    // Iterate over each element and swap the class
    elements.forEach(function(element) {
        element.classList.forEach(function(cls) {
            // Check if the class matches the "bfl bfl-XX" pattern
            if (cls.startsWith('bfl-')) {
                // Remove both "bfl" and the specific "bfl-XX" class
                element.classList.remove('bfl', cls);
                // Add "flag flag-il" in their place
                element.classList.add('flag', 'flag-il');
            }
        });
    });
})();
