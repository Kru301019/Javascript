'use strict';
/**
 * Add your functions here...
 */

// function targetTextToConsole(e) {
//     const out = e.target.textContent;
//     console.log(out);
// };

// function tttcAttacher() {
//     myButton = document.querySelector('#button0');
//     myButton.addEventListener('click', targetTextToConsole);
// };

// tttcAttacher();

function lovelyToggle() {
    // Get the paragraph element
    var para = document.getElementById('thisisalovelyparagraph');

    // Check the current color of the paragraph text
    if (para.style.color == 'red') {
        // If the color is currently red, change it to blue
        para.style.color = 'blue';
    } else {
        // If the color is not currently red (including if it's not set at all), change it to red
        para.style.color = 'red';
    }
}


function lovelyParaAttacher() {
    
    const button_1 = document.querySelector('#button1');
    button_1.addEventListener('click', lovelyToggle);
};

