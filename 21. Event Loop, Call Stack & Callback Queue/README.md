# JavaScript Event Loop

## JavaScript is Single-Threaded

JavaScript executes one task at a time.

It has:

- One Call Stack
- One Memory Heap

Because of this, JavaScript can only execute one piece of code at a time.

---

## What is the Call Stack?

The Call Stack is where JavaScript keeps track of function execution.

Example:

```javascript
function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();
```

Stack Flow:

```text
Call Stack

second()
first()
Global()
```

Functions enter the stack and leave when execution finishes.

---

## What is Web API?

Browser features provided outside JavaScript.

Examples:

- setTimeout()
- DOM Events
- fetch()
- Geolocation

Example:

```javascript
setTimeout(() => {
    console.log("Done");
}, 1000);
```

The browser handles the timer.

---

## What is Callback Queue?

When an asynchronous task completes, its callback waits in the Callback Queue.

Example:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

After 1 second:

```text
Callback Queue

console.log("Hello")
```

---

## What is Event Loop?

The Event Loop continuously checks:

1. Is the Call Stack empty?
2. If yes, move tasks from the Queue to the Call Stack.

This process repeats forever.

---

## Execution Flow

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");
```

Step 1:

```text
Start
```

Step 2:

```text
setTimeout sent to Web API
```

Step 3:

```text
End
```

Step 4:

```text
Timer
```

Final Output:

```text
Start
End
Timer
```

---

## Microtask Queue

Higher priority than Callback Queue.

Examples:

- Promise.then()
- catch()
- finally()
- queueMicrotask()

Example:

```javascript
Promise.resolve()
    .then(() => {
        console.log("Promise");
    });
```

Stored in:

```text
Microtask Queue
```

---

## Promise vs setTimeout

```javascript
console.log("Start");

Promise.resolve()
    .then(() => {
        console.log("Promise");
    });

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
```

Output:

```text
Start
End
Promise
Timeout
```

Reason:

Microtask Queue executes before Callback Queue.

---

## Real-Life Example

API Request

```javascript
fetch("/users")
    .then(response =>
        response.json()
    )
    .then(data => {
        console.log(data);
    });
```

Browser performs the request asynchronously while JavaScript continues executing.

---

## Interview Questions

### What is the Event Loop?

The Event Loop continuously checks whether the Call Stack is empty and moves queued tasks for execution.

---

### What is the Call Stack?

A data structure that tracks function execution.

---

### What is the Callback Queue?

A queue where completed asynchronous callbacks wait before execution.

---

### What is the Microtask Queue?

A high-priority queue used by Promises.

---

### Which runs first?

```javascript
Promise.then()
```

or

```javascript
setTimeout()
```

Answer:

```javascript
Promise.then()
```

because Microtasks have higher priority.

---

## Summary

- JavaScript is single-threaded.
- Call Stack executes functions.
- Web APIs handle async tasks.
- Callback Queue stores completed callbacks.
- Event Loop moves tasks to the stack.
- Promise callbacks run before setTimeout callbacks.