**Node.js File System (fs) Operations**

## 1. **fs.writeFile()** (Asynchronous)
This function is used to write data to a file. If the file does not exist, it creates one.

### **Syntax:**
```javascript
const fs = require("fs");
fs.writeFile("example.txt", "Hello, World!", (err) => {
  if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File written successfully");
  }
});
```

---

## 2. **fs.readFile()** (Asynchronous)
This function is used to read the content of a file asynchronously.

### **Syntax:**
```javascript
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
  }
  console.log("File content:", data);
});
```

---

## 3. **fs.writeFileSync()** (Synchronous)
This function writes data to a file synchronously, blocking the execution until it completes.

### **Example:**
```javascript
const fs = require("fs");
fs.writeFileSync("sync_example.txt", "Synchronous write example");
console.log("File written successfully");
```

---

## 4. **fs.readFileSync()** (Synchronous)
Reads a file synchronously, blocking execution until it completes.

### **Example:**
```javascript
const content = fs.readFileSync("sync_example.txt", "utf8");
console.log("File content:", content);
```

---

## 5. **fs.appendFile()**
This function appends data to an existing file. If the file does not exist, it creates one.

### **Example:**
```javascript
fs.appendFile("example.txt", "\nAppended content", (err) => {
  if (err) {
    console.log("Error appending file:", err);
  } else {
    console.log("File updated successfully");
  }
});
```

---

## 6. **Measuring Execution Time using console.time() and console.timeEnd()**
Node.js provides `console.time(label)` and `console.timeEnd(label)` to measure execution time.

### **Example:**
```javascript
console.time("Execution time");
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
console.timeEnd("Execution time");
```
**Output:**
```
Execution time: 2.345s
```

---

## 7. **How JavaScript Optimizes Large Iterations?**
- **JIT Compilation (Just-in-Time)**: JavaScript engines like V8 convert frequently executed code into optimized machine code at runtime.
- **Hidden Classes & Inline Caching**: JavaScript optimizes object property access using hidden classes and caching mechanisms.
- **Loop Unrolling**: JavaScript engines optimize loops by reducing the number of iterations internally.
- **Tail Call Optimization**: Reduces stack usage by optimizing recursive functions.
- **Garbage Collection**: Automatically manages memory efficiently.

This optimization enables JavaScript to execute billions of iterations efficiently, making it highly performant even for CPU-intensive tasks.

