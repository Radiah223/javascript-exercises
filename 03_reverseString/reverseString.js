const reverseString = function(string) {
    let length = string.length; 
    let flipped = ""; 
    for (let i = length-1; i>=0; i--){ 
        flipped += string[i];
    }
    return flipped;
};

// Do not edit below this line
module.exports = reverseString;
