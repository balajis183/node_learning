// console.log("hello world ! It's about adding 2 numbers\n");

//  let  a=10;
//  let  b=20;

//  let c=a+b;

//  console.log("The output is "+c);

var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/" });
    res.write("welcome to my server");
    res.end();
  })
  .listen(8080);
