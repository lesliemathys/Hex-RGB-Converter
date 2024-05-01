let hexValue = document.getElementById('hex-input');
let rgbOutput = document.getElementById('rgb-output');
let hexCode = [];

const hexInput = document.getElementById('convert-to-rgb')
const hexArray = [];
const rgbArray = [];

hexInput.addEventListener('click', function(){

    //checks whether array is empty, if so adds input
    if (hexCode.length === 0) {

        //splits hex input by character, returning array of 6 characters 
        // ready to be converted to decimal
        hexCode = hexValue.value.split("");
        hexArray.push(hexCode[0]+hexCode[1], hexCode[2]+hexCode[3], hexCode[4]+hexCode[5])
        convertInputsToDecimal()
        rgbOutput.value = rgbArray.join(', ');
    }

    else {
        hexCode.length = 0;
        hexArray.length = 0;
        rgbArray.length = 0;

        hexCode = hexValue.value.split("");
        hexArray.push(hexCode[0]+hexCode[1], hexCode[2]+hexCode[3], hexCode[4]+hexCode[5])
        convertInputsToDecimal()
        rgbOutput.value = rgbArray.join(', ');        
    }

    console.log(hexCode);
    console.log(hexArray)
    console.log(rgbArray);
})

// loops through input and converts each element of the array into its decimal equivalent
function convertInputsToDecimal(){
    for (let i = 0; i < hexArray.length; i++){
        rgbArray.push(parseInt(hexArray[i], 16));
    }
}