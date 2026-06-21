# JavaScript Async/Await

## What is Async/Await?

Async/Await is a modern way to handle asynchronous operations.

It makes asynchronous code look and behave more like synchronous code, making it easier to read and maintain.

Async/Await is built on top of Promises.

---

## Why Use Async/Await?

Promise Version:

```javascript
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

Async/Await Version:

```javascript
const data =
    await fetchData();

console.log(data);
```

The Async/Await version is cleaner and easier to understand.

---

## async Keyword

The `async` keyword makes a function return a Promise.

```javascript
async function greet() {
    return "Hello";
}
```

This actually returns:

```javascript
Promise.resolve("Hello");
```

---

## await Keyword

The `await` keyword pauses execution until a Promise is resolved.

```javascript
const result =
    await fetchData();
```

`await` can only be used inside an async function.

---

## Basic Example

```javascript
function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data Received");
        }, 2000);

    });
}

async function getData() {

    const result =
        await fetchData();

    console.log(result);
}
```

Output after 2 seconds:

```text
Data Received
```

---

## Error Handling with try...catch

```javascript
async function getData() {

    try {

        const result =
            await fetchData();

        console.log(result);

    } catch (error) {

        console.log(error);
    }
}
```

---

## finally Block

```javascript
try {

} catch(error) {

} finally {

    console.log("Always Runs");
}
```

The finally block executes whether the operation succeeds or fails.

---

## Real-Life Example

Fetching data from an API.

```javascript
async function getPost() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

    const data =
        await response.json();

    console.log(data);
}
```

This is very common in React and modern web applications.

---

## Interview Questions

### What is Async/Await?

A modern syntax for working with Promises that makes asynchronous code easier to read.

---

### Can await be used outside an async function?

No.

Incorrect:

```javascript
const data =
    await fetchData();
```

Correct:

```javascript
async function getData() {

    const data =
        await fetchData();
}
```

---

### Difference between Promise and Async/Await?

| Promise | Async/Await |
|----------|-------------|
| Uses then() and catch() | Uses async and await |
| More verbose | Cleaner syntax |
| Can be harder to read | Easier to read |

---

### Why use try...catch with Async/Await?

To handle errors gracefully.

```javascript
try {

} catch(error) {

}
```

---

## Summary

- Async/Await is built on top of Promises.
- async makes a function return a Promise.
- await waits for a Promise to resolve.
- try...catch handles errors.
- Async/Await is the preferred modern approach.