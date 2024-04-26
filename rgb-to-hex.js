let redVal = document.getElementById('red-input');
let greenVal = document.getElementById('green-input');
let blueVal = document.getElementById('blue-input');
let hexOutput = document.getElementById('hexOutput')

const rgbValues = [];
const hexValues = [];
const decimalSixteens = [];
const decimalOnes = [];
const hexSixteens = [];
const hexOnes = [];
const rgbInputs = document.getElementById('convert-to-hex');

// function that grabs user RGB input and then processes it
rgbInputs.addEventListener('click', function(){

    // check if array is empty. If so add inputs to it afresh
    if (rgbValues === 0){
        rgbValues.push(redVal.value, greenVal.value, blueVal.value);
        calculateDecimalSixteens()
        calculateDecimalOnes()
        calculateHexSixteens()
        calculateHexOnes()
        hexValues.push(hexSixteens[0], hexOnes[0],hexSixteens[1], hexOnes[1],hexSixteens[2], hexOnes[2]);
        hexOutput.value = hexValues.join('').toUpperCase();
    } 
    
    // if array is not empty, create a new array that replaces the rgbValues array
    else {

        rgbValues.length = 0;
        hexValues.length = 0;
        decimalSixteens.length = 0;
        decimalOnes.length = 0;
        hexSixteens.length = 0;
        hexOnes.length = 0;

        //const replacementRgbValues = [];
        rgbValues.push(redVal.value, greenVal.value, blueVal.value);
        // replacementRgbValues.push(redVal.value, greenVal.value, blueVal.value);
        // rgbValues.splice(0, 3, ...replacementRgbValues)
        calculateDecimalSixteens()
        calculateDecimalOnes()
        calculateHexSixteens()
        calculateHexOnes()
        hexValues.push(hexSixteens[0], hexOnes[0],hexSixteens[1], hexOnes[1],hexSixteens[2], hexOnes[2]);
        hexOutput.value = hexValues.join('').toUpperCase();
    }
}
);

// divide rgb value by 16 to give how many sixteens. this will be used to query hex key to give first part of each hex code segment (#x_x_x_)
function calculateDecimalSixteens(){
    for (let i =0; i < rgbValues.length; i++) {
        decimalSixteens.push(Math.floor(rgbValues[i] / 16));
    }
}

// calculate how many ones are in the rgb value, this will be used to query hex key to give second part of each hex code segment (#_x_x_x)
function calculateDecimalOnes(){
    for (let i =0; i < rgbValues.length; i++) {
        decimalOnes.push(rgbValues[i] - (decimalSixteens[i] * 16));
    }
}

// convert every decimal 'sixteen' element in the decimalSixteens array to its hexadecimal equivalent
function calculateHexSixteens(){
    for (let i =0; i < decimalSixteens.length; i++){
        hexSixteens.push(decimalSixteens[i].toString(16));
    }
}

// convert every decimal 'one' element in the decimalSixteens array to its hexadecimal equivalent
function calculateHexOnes(){
    for (let i =0; i < decimalOnes.length; i++){
        hexOnes.push(decimalOnes[i].toString(16));
    }
}