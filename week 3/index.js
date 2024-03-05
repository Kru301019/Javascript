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

// function lovelyToggle() {
//     // Get the paragraph element
//     var para = document.getElementById('thisisalovelyparagraph');

//     // Check the current color of the paragraph text
//     if (para.style.color == 'red') {
//         // If the color is currently red, change it to blue
//         para.style.color = 'blue';
//     } else {
//         // If the color is not currently red (including if it's not set at all), change it to red
//         para.style.color = 'red';
//     }
// }


// function lovelyParaAttacher() {
    
//     const button_1 = document.querySelector('#thisisalovelyparagraph');
//     button_1.addEventListener('click', lovelyToggle);
// };

// const inputOne = document.querySelector("#in1");
// const inputTwo = document.querySelector("#in2");
// const out = document.querySelector("#out1");

/* function updateOutPut() {

  const combainedValue = `${inputOne?.value} ${inputTwo?.value}`;
  out.textContent = combainedValue;
}

function checkForEnter(e) {
  if (e.key === "Enter") {
    updateOutPut();
  }
}

function concatAttacher() {
  
  inputOne.addEventListener("keydown", checkForEnter);
  inputTwo.addEventListener("keydown", checkForEnter);
}
 */


function mouseIN(e) {
    e.target.textContent = 'In'; 
};

function mouseOut(e) {
  e.target.textContent = 'Out'; 
};

const mouseBox = document.querySelector('#snitch');
mouseBox.addEventListener('mouseover', mouseIN);
mouseBox.addEventListener('mouseout', mouseOut);