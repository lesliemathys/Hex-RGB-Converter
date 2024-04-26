let redVal = document.getElementById('red-input');
let greenVal = document.getElementById('green-input');
let blueVal = document.getElementById('blue-input');
let hexOutput = document.getElementById('hexOutput')

const rgbValues = [];
const hexSixteens = [];
const hexOnes = [];
const rgbInputs = document.getElementById('convert-to-hex');

// function that grabs user RGB input and then processes it
rgbInputs.addEventListener('click', function(){

    // check if array is empty. If so add inputs to it afresh
    if (rgbValues === 0){

        rgbValues.push(redVal.value, greenVal.value, blueVal.value);
        calculateSixteens()
        calculateOnes()
    } 
    
    // if array is not empty, create a new array that replaces the rgbValues array
    else {
        const replacementRgbValues = [];
        replacementRgbValues.push(redVal.value, greenVal.value, blueVal.value);
        rgbValues.splice(0, 3, ...replacementRgbValues)
        calculateSixteens()
        calculateOnes()
    }

    hexOutput.value = rgbValues[0];

    }
);

function calculateSixteens(){
    for (let i =0; i < rgbValues.length; i++) {
        hexSixteens.push(Math.floor(rgbValues[i] / 16));
    }
}

function calculateOnes(){
    for (let i =0; i < rgbValues.length; i++) {
        hexOnes.push(rgbValues[i] - (hexSixteens[i] * 16));
    }
}