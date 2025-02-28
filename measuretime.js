console.log("start");

console.time("Execution time of the loop");
 let count = 0;
 let sum =0;

for (let index = 0; index < 1000_000_000; index++) {
  count++;
  sum += Math.sqrt(index);
}

console.log("Count value:" + count);
console.log("Squrare root sum:" + sum);
console.timeEnd("Execution time of the loop");

console.log("End of the program ");
