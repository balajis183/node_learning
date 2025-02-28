# Express.js Basics

## Why Do We Need a Framework for Node.js?
Node.js is a runtime environment that allows running JavaScript outside the browser, but it lacks built-in tools for routing, middleware, and request parsing. Express.js simplifies development by:
- Handling **routing** efficiently.
- Providing **middleware** for request processing.
- Managing **error handling** properly.
- Supporting **templating engines** for dynamic content rendering.
- Keeping the code **structured** and **maintainable**.

Without Express.js, handling these manually would make development complex.

---

## Node.js Has an HTTP Module – Why Use Express.js?
Yes, Node.js has a built-in `http` module, but it's very **low-level** and requires more boilerplate code.

### Example Using Node.js `http` Module:
```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```
✅ **This works but is verbose.**

### Example Using Express.js:
```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, World!"));
app.get("/about", (req, res) => res.send("About Page"));

app.listen(3000, () => console.log("Server running on port 3000"));
```
✅ **Much cleaner and easier to manage!**

### When to Use Express.js:
- When you need **structured** routing.
- When you want built-in **middleware** for JSON parsing, logging, etc.
- When you need **better error handling and scalability**.

---

## Express.js & Endpoints
Express.js is mainly used to **handle HTTP requests and responses**.

### Example: Defining an Endpoint in Express.js
```js
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});
```
✅ `/users` is an **endpoint** that sends a JSON list of users.

Express makes it easy to define RESTful APIs.

---

## Is Express.js Really a Framework? Then Why Is It "Unopinionated"?
Yes! **Frameworks usually enforce rules**, but Express.js is different.

### Opinionated vs Unopinionated Frameworks:
- **Opinionated frameworks (e.g., Angular)** → Force a specific structure.
- **Unopinionated frameworks (e.g., Express.js)** → Allow freedom to structure the project.

📌 **Express.js doesn’t enforce a specific pattern.**
- You can define routes in **one file** or **multiple files**.
- You can use **any middleware**.
- You can structure projects **your way**.

This flexibility makes Express **lightweight, powerful, and widely used**.

---

## Summary
✅ **Why Express.js?** → Simplifies routing, middleware, and API development.
✅ **Why not just Node.js HTTP module?** → Express provides cleaner, maintainable, and scalable code.
✅ **What is an endpoint?** → A URL where Express.js listens and responds to requests.
✅ **If Express is a framework, why is it unopinionated?** → It gives freedom to organize the code as needed.

🚀 **Express.js is simple, flexible, and powerful – making web development easier!**
