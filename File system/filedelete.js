const fs = require("fs");

fs.unlink("delete.js", function (err) {
  if (err) {
    console.log(err);
  }
  console.log("File deleted successfully i.e delete.js file delted !!!");
});
