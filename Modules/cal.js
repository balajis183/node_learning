const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};
function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

module.exports = { add, sub, mul, div };


console.log("It's a module !!");
