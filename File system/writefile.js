const write = require("fs");

write.writeFile(
  "data.txt",
  "Here the sample sentence that is written into a file called data.txt ( here the existing data will go now)",
  function (err) {
    if (err) {
      console.log(err);
    }

    console.log("Data added successfully");
  }
);
