const fs = require("fs");

console.log("start");

console.time("Read Async file");

fs.readFile("../Modules/cal.js", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
  console.timeEnd("Read Async file");
  console.log("Data printed successfully");
});

console.log("End");
