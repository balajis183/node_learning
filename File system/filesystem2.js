const file = require("fs");

file.readFile("../Files to be read/nodejs_facts.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
