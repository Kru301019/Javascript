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


// function mouseIN(e) {
//     e.target.textContent = 'In'; 
// };

// function mouseOut(e) {
//   e.target.textContent = 'Out'; 
// };

// const mouseBox = document.querySelector('#snitch');
// mouseBox.addEventListener('mouseover', mouseIN);
// mouseBox.addEventListener('mouseout', mouseOut);

// function mouseIN(e) {
//     const myReport = document.querySelector('#report');
//     const x = e.clientX;
//     const y = e.clientY;
//     myReport.textContent = `x: ${x}, y: ${y}`;
// };

// function reportAttacher() {
//   const reportInput = document.querySelector('#mousereporter');
//   reportInput.addEventListener('mousemove',mouseIN);
// };

// reportAttacher();

// Select the input field and the error message
const inputField = document.querySelector('#newid');
const errorMessage = document.querySelector('#newiderror');

// Hide the error message initially
errorMessage.style.display = 'none';

// Add an input event listener to the input field
inputField.addEventListener('input', function() {
    // Check if the input value contains a space
    if (inputField.value.includes(' ')) {
        // If it does, show the error message
        errorMessage.style.display = 'inline';
    } else {
        // If it doesn't, hide the error message
        errorMessage.style.display = 'none';
    }
});
