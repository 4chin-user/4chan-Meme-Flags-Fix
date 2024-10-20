// ==UserScript==
// @name         Fix Memeflags
// @license MIT
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Fix Memeflags on /pol/
// @author       You
// @match        *://boards.4chan.org/pol/*
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
