let redVal = document.getElementById('red-input');
let greenVal = document.getElementById('green-input');
let blueVal = document.getElementById('blue-input');
let hexOutput = document.getElementById('hexOutput')

const rgbValues = [];
const rgbInputs = document.getElementById('convert-to-hex');

rgbInputs.addEventListener('click', function(){

    // check if array is empty. If so add inputs to it afresh
    if (rgbValues === 0){

        rgbValues.push(redVal.value, greenVal.value, blueVal.value);

    } 
    
    // if array is not empty, create a new array that replaces the rgbValues array
    else {
        const replacementRgbValues = [];
        replacementRgbValues.push(redVal.value, greenVal.value, blueVal.value);
        rgbValues.splice(0, 3, ...replacementRgbValues)
        console.log(rgbValues);
    }

    hexOutput.value = rgbValues[0];

    }
);

