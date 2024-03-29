/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

"use strict";

// add your functions here

function replaceText(elem, str) {
  elem.innerText = str;
}

function addTextTo(elem, str) {
  elem.textContent += str;
}

function moreBears() {
  var myElem = document.querySelector("#animals");
  myElem.src = "http://placebear.com/400/200";
  myElem.alt = "A bear.";
  myElem.title = "A BEAR!";
}

function setId(elem, str) {
  elem.id = str;
  return elem;
}

function setClass(elem, str) {
  elem.className = str;
  return elem;
}

function addAClass(elem, str) {
  elem.classList.add(str);
  return elem;
}

function removeAClass(elem, str) {
  elem.classList.remove(str);
  return elem;
}

function newElement(name) {
  return document.createElement(name);
}

function findElementById(id) {
  return document.getElementById(id);
}

function findElementsByQuery(query) {
  return document.querySelectorAll(query);
}

function reverseList(query) {
  const list = document.querySelector(query); // Get the <ul> or <ol> element
  const listItems = Array.from(list.children).reverse(); // Reverse the order of list items
  listItems.forEach((element) => list.appendChild(element)); // Append each item back to the list
  return list; // Return the selected element
}

function mover(moveThis, appendToThis) {
    const child = document.querySelector(moveThis);
    const parent = document.querySelector(appendToThis);
    console.log(child.textContent);
    parent.append(child);
};

function filler(list, candidates) {
    for (const candidate of candidates) {
         const myLi = document.createElement('li');
         myLi.textContent = candidate;
         list.append(myLi);

    };
 };

function dupe(selector) {
    const elem = document.querySelector(selector);
    const clonedElem = elem.cloneNode(true);
    elem.parentNode.append(clonedElem);
    
};

function removeAll(selector) {
  const elem = document.querySelectorAll(selector);

  for (const i of elem){
       i.textContent = 'I love you';
  };
};

function getUserData() {
  const userName = document.querySelector('#username');
  const mySpeed = document.querySelector('#speed');
  const myStudnet = document.querySelector('#student');
  let isStudent
  myStudnet.addEventListener('change', function() {
       isStudent = myStudnet.checked;
       
  });

  const result = {
      name : userName.value,
      speed : mySpeed.value,
      student : isStudent
  };

  console.log(result);
};
