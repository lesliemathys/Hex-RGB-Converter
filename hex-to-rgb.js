const hexToRgbKey = {
    '0':'0', '1':'1', '2':'2', '3':'3',
    '4':'4', '5':'5', '6':'6', '7':'7',
    '8':'8', '9':'9', 'A':'10', 'B':'11',
    'C':'12', 'D':'13', 'E':'14', 'F':'15'
};

//event listener that checks that if input is exactly 3 of the same characters to change answer to 6 of the same as hex code, else show hint

//on submit take hex code and break down each character and 
//then convert each into a string
//push into an array
//query each item in the array against the object
//on query, convert answer back into integer
//multiply 1st, 3rd, 5th query answers by 16
//add 1st and 2nd, 3rd and 4th, 5th and 6th
//then concatenate