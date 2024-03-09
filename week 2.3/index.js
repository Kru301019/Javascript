/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// async function showMessage(elem, url) {
//     try {
//         const response = await fetch(url);
//         const text = await response.text();
//         elem.textContent = text;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// window.addEventListener('load',  showMessage);

function report(message, isError = false) {
    if (isError) {
        console.error(message);
    } else {
        console.log(message);
    }
}

async function showList(elem, url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            report(data);
        } else {
            report('No data', true);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        report('Error fetching data', true);
    }
}

const elemTwo = document.querySelector('#list2');
const urlTwo = 'http://jacek.soc.port.ac.uk/tmp/ws/arr8';
window.addEventListener('load', () => {
    showList(elemTwo, urlTwo);
});
