# JavaScript Promises

## What is a Promise?

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

Think of it as a promise that something will happen in the future.

Examples:

- API requests
- Database operations
- File uploads
- Timers

---

## Why Use Promises?

Before Promises, JavaScript used nested callbacks.

Example:

```javascript
getData(function() {
    getUser(function() {
        getPosts(function() {

        });
    });
});
```

This is known as **Callback Hell**.

Promises provide a cleaner solution.

---

## Promise States

A Promise can have three states:

### Pending

Operation is still running.

```text
Pending...
```

### Fulfilled

Operation completed successfully.

```text
Resolved
```

### Rejected

Operation failed.

```text
Rejected
```

---

## Creating a Promise

```javascript
const promise = new Promise(
    (resolve, reject) => {

        let success = true;

        if (success) {
            resolve("Success");
        } else {
            reject("Failed");
        }
    }
);
```

---

## resolve()

Used when the operation succeeds.

```javascript
resolve("Data Loaded");
```

---

## reject()

Used when the operation fails.

```javascript
reject("Something Went Wrong");
```

---

## then()

Handles successful results.

```javascript
promise.then((result) => {
    console.log(result);
});
```

---

## catch()

Handles errors.

```javascript
promise.catch((error) => {
    console.log(error);
});
```

---

## finally()

Runs regardless of success or failure.

```javascript
promise.finally(() => {
    console.log("Completed");
});
```

---

## Real-Life Example

Simulating a server request.

```javascript
const fetchData = new Promise(
    (resolve) => {

        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    }
);

fetchData.then((data) => {
    console.log(data);
});
```

Output after 2 seconds:

```text
Data Received
```

---

## Promise Chaining

Promises can be chained together.

```javascript
Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 10)
    .then(result => {
        console.log(result);
    });
```

Output:

```text
20
```

---

## Interview Questions

### What is a Promise?

A Promise is an object used to handle asynchronous operations.

---

### What are the three states of a Promise?

1. Pending
2. Fulfilled
3. Rejected

---

### Difference between resolve() and reject()?

| resolve() | reject() |
|------------|------------|
| Success | Failure |
| Calls then() | Calls catch() |

---

### What is Promise Chaining?

Executing multiple asynchronous operations sequentially using multiple then() methods.

---

## Summary

- Promises handle asynchronous operations.
- States:
  - Pending
  - Fulfilled
  - Rejected
- then() handles success.
- catch() handles errors.
- finally() runs regardless of the result.
- Promises help avoid callback hell.