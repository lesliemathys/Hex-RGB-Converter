let hexValue = document.getElementById('hex-input');

const hexInput = document.getElementById('convert-to-rgb')
const hexCode = [];
const hexRed = [];
const hexGreen = [];
const hexBlue = [];

hexInput.addEventListener('click', function(){
    if (hexCode.length === 0) {
        hexCode.push(hexValue.value);
    }
    return console.log(hexCode);

})