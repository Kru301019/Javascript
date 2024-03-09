/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(element, url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        element.textContent = text;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const elemOne = document.querySelector('#message');
const urlOne = 'example_one.txt';

window.addEventListener('load', () => {
    showMessage(elemOne, urlOne);
});