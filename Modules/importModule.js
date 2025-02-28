const cal = require("./cal"); //importing the entire module 

const addition = cal.add(10, 1986);

const subtraction = cal.sub(10000, 1);

const product = cal.mul(5620, 889);

const division = cal.div(100, 2);

console.log("Addition of the two numbers:" + addition + "\n");

console.log("Subtraction of the two numbers:" + subtraction + "\n");

console.log("Product of the two numbers:" + product + "\n");

console.log("Division of the two numbers:" + division + "\n");


//different ways of formatting the output

console.log(`Addition of the two numbers: ${addition}`);
console.log(`Subtraction of the two numbers: ${subtraction}`);
console.log(`Product of the two numbers: ${product}`);
console.log(`Division of the two numbers: ${division}`)