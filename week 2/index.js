const prompt = require('prompt-sync')();
/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here


function replaceText(elem, str){
    elem.innerText = str;
};

var myH1 = document.getElementById('thisisaparagraph');


replaceText(myH1, 'MY Javascript'); 