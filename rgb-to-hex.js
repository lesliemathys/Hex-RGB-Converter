let r = document.getElementById('red-input');
let g = document.getElementById('green-input');
let b = document.getElementById('blue-input');
let hexOutput = document.getElementById('hexOutput')

const form = document.getElementById('rgb-input');

form.addEventListener('submit', function(e){
    
    e.preventDefault();

    r = convertToHex(r.value);
    g = convertToHex(g.value);
    b = convertToHex(b.value);

    rgb = r + g + b;
    rgb = rgb.toUpperCase();

    function convertToHex(rgb) {
        let hexCode = Number(rgb).toString(16);
        return hexCode;
    }

    hexOutput.value = rgb;
})