const write = require("fs");

write.appendFile("data.txt", "\nHello world!", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Data added successfully");
});
