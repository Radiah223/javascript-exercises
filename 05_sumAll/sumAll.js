const sumAll = function(val1, val2) {
    if (val1 > 0 && val2 > 0 && Number.isInteger(val1) && Number.isInteger(val2)){
        let sum = 0; 
        let min = val1; 
        let max = val2; 
        if (val1 > val2){ 
            max = val1; 
            min = val2;
        }
        for(let i = min; i<=max; i++){ 
            sum += i; 
        }
        return sum;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
