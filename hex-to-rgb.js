let hexValue = document.getElementById('hex-input');
let hexCode = [];

const hexInput = document.getElementById('convert-to-rgb')
const rgbOutput = [];

hexInput.addEventListener('click', function(){
    if (hexCode.length === 0) {
        hexCode = hexValue.value.split("");
        convertToDecimal()
    }
    console.log(hexCode);
    console.log(rgbOutput);

})

function convertToDecimal(){
    for (let i = 0; i < hexCode.length; i++){
        rgbOutput.push(parseInt(hexCode[i], 16));
    }
}