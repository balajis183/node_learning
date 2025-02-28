# File Operations in Node.js

## 1. Reading a File (fs.readFile)
### Syntax:
```js
fs.readFile(path, encoding, callback);
```
- `path`: The file path to read.
- `encoding`: (Optional) Encoding format (e.g., `utf8`).
- `callback`: A function that receives an error (if any) and the file data.

### Example:
```js
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});
```

## 2. Writing to a File (fs.writeFile)
### Syntax:
```js
fs.writeFile(path, data, options, callback);
```
- `path`: The file to write to (created if it does not exist).
- `data`: Content to be written.
- `options`: (Optional) An object specifying flags and encoding.
- `callback`: Function that handles errors.

### Example:
```js
fs.writeFile("output.txt", "Hello, Node.js!", "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully.");
  }
});
```

## 3. Appending to a File (fs.appendFile)
### Syntax:
```js
fs.appendFile(path, data, options, callback);
```
- Similar to `writeFile`, but appends data instead of overwriting.

### Example:
```js
fs.appendFile("output.txt", "\nNew line added!", "utf8", (err) => {
  if (err) {
    console.error("Error appending to file:", err);
  } else {
    console.log("Content appended successfully.");
  }
});
```

## 4. Reading a File Synchronously (fs.readFileSync)
### Syntax:
```js
const data = fs.readFileSync(path, encoding);
```
- Blocks execution until the file is read.

### Example:
```js
const data = fs.readFileSync("example.txt", "utf8");
console.log("File content:", data);
```

## 5. Writing to a File Synchronously (fs.writeFileSync)
### Syntax:
```js
fs.writeFileSync(path, data, options);
```
- Blocks execution until the file is written.

### Example:
```js
fs.writeFileSync("output.txt", "Synchronous Write Example", "utf8");
console.log("File written synchronously.");
```

## 6. Measuring Execution Time
### Syntax:
```js
console.time(label);
// Code to measure
console.timeEnd(label);
```

### Example:
```js
console.time("Execution Time");

let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i;
}

console.timeEnd("Execution Time");
```

## 7. Why JavaScript Executes Fast?
- **Single-threaded, non-blocking I/O**: Uses asynchronous callbacks.
- **Event Loop**: Manages operations efficiently.
- **V8 Engine Optimization**: JavaScript engine optimizes code execution.

By leveraging asynchronous operations and efficient memory management, JavaScript can handle billions of iterations efficiently. 🚀
