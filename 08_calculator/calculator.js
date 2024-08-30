const add = function(num1, num2) {
  return num1+num2; 
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
  return arr.reduce((sum,currItem)=>sum+currItem, 0); 
	
};

const multiply = function(arr) {
  return arr.reduce((product, currItem)=>product * currItem);
};

const power = function(base, exp) {
  return base**exp;
	
};

const factorial = function(num) {
  let product = 1; 
  for (let i = num; i>0; i--){ 
    product = i * product;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
