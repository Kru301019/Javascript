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
};

// let myElement = document.getElementById('thisisaparagraph');
// replaceText(myElement, 'enter text');

// function addTextTo(elem, str) {
//      elem.innerText += str;
// };

// let elemAddTextTo = document.getElementById('thisisaparagraph');
// let str = 'my string late';
// addTextTo(elemAddTextTo, str);

function moreBears() {
    let getImage = document.getElementById('animals');
    getImage.alt = 'a bear';
    getImage.title = 'A BEAR!';
    getImage.src = 'https://placebear.com/400/200';
};

//moreBears();

function setID(elm, txt) {
    elm.id = txt;
};

let myId = document.getElementById('animals');
setID(myId, 'bears');

function setClass(elm, txt) {
    elm.className = txt;
};

let myClass = document.getElementsByClassName('selectus')[2];
//setClass(myClass, 'changed');

function addClass(elm, txt) {
    elm.classList.add(txt);
    
};

let elmaddClass = document.getElementById('myID');
addClass(elmaddClass, 'myClass');

function removeAClass(elm, txt) {
    elm.classList.remove(txt);
    return elm;
};

let elmremoveAClass = document.getElementById('myID');
removeAClass(elmremoveAClass,'myClass');