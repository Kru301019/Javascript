//const prompt = require('prompt-sync')();
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

function replaceText(elem, str) {
    elem.innerText = str;
}

var myParagraph = document.querySelector('#thisisaparagraph');

replaceText(myParagraph, 'Hell yeah');

// No need to log the result of replaceText, as it doesn't return anything
console.log(myParagraph.innerText);

function addTextTo(elem ,str) {
    elem.textContent += str;
};

var myElement = document.querySelector('#addto');
addTextTo(myParagraph, 'Replace succuss!');

function moreBears() {
    var myElem = document.querySelector('#animals') 
    myElem.src = 'http://placebear.com/400/200';
    myElem.alt = 'A bear.'
    myElem.title = 'A BEAR!'
};

function setid(elem, str) {
   return elem.textContent = str;
};

const elemForSetid = document.querySelector('#animals');
setid(elemForSetid, 'myAnimal');