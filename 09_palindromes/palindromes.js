const palindromes = function (str) {
    const valid = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"; 
    const original = str.toLowerCase().split("").filter((item)=>valid.includes
    (item)).join("");
    const reversed = original.split("").reverse().join(""); 
    return original ==reversed;
};

// Do not edit below this line
module.exports = palindromes;
