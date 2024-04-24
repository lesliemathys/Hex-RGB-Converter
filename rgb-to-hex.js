//event listener to default numbers over 255 to max value of 255

//event listener to default negative numbers to 0

//on submit, change input to string

// r, g, b values in > 
//divide by 16 > 
//store whole as variable > 
//store modulus as variable > 
// cross-reference each variable against hexKey object, convert to hex >
// concatenate each variable to create hex equivalent>

const rgbToHexKey = {
    '0':'0', '1':'1', '2':'2', '3':'3',
    '4':'4', '5':'5', '6':'6', '7':'7',
    '8':'8', '9':'9', '10':'A', '11':'B',
    '12':'C', '13':'D', '14':'E', '15':'F'
};

const form = document.getElementById('rgb-input');

form.addEventListener('submit', function(getFormValues){
    
    getFormValues.preventDefault();

    redValue = document.getElementById('red-input').value;
    greenValue = document.getElementById('green-input').value;
    blueValue = document.getElementById('blue-input').value;

    console.log(redValue);
    console.log(greenValue);
    console.log(blueValue);

})