# JavaScript Fetch API

## What is Fetch API?

The Fetch API is a built-in JavaScript feature used to communicate with servers and APIs.

It allows applications to:

- Get data from servers
- Send data to servers
- Update existing data
- Delete data

Fetch API returns a Promise.

---

## Why is Fetch API Important?

Modern web applications constantly communicate with servers.

Examples:

- Facebook loading posts
- YouTube loading videos
- LinkedIn loading profiles
- Weather applications fetching weather data

All of these commonly use APIs.

---

## Basic Syntax

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
```

Modern version:

```javascript
const response =
    await fetch(url);

const data =
    await response.json();
```

---

## GET Request

Used to retrieve data.

```javascript
const response =
    await fetch(url);

const data =
    await response.json();
```

---

## response.json()

Converts JSON data into JavaScript objects.

```javascript
const data =
    await response.json();
```

---

## POST Request

Used to create new data.

```javascript
fetch(url, {
    method: "POST",

    headers: {
        "Content-Type":
            "application/json"
    },

    body: JSON.stringify(data)
});
```

---

## PUT Request

Used to update existing data.

```javascript
method: "PUT"
```

---

## DELETE Request

Used to remove data.

```javascript
method: "DELETE"
```

---

## HTTP Methods Overview

| Method | Purpose |
|----------|----------|
| GET | Read Data |
| POST | Create Data |
| PUT | Update Data |
| DELETE | Delete Data |

---

## Real-Life Example

Load student information from a server.

```javascript
async function getStudent() {

    const response =
        await fetch("/student");

    const data =
        await response.json();

    console.log(data);
}
```

---

## Error Handling

Always use try...catch.

```javascript
try {

    const response =
        await fetch(url);

} catch(error) {

    console.log(error);
}
```

---

## Interview Questions

### What is Fetch API?

A built-in JavaScript API used to make HTTP requests.

---

### What does fetch() return?

A Promise.

```javascript
const response =
    await fetch(url);
```

---

### What does response.json() do?

Converts JSON data into a JavaScript object.

---

### Difference between GET and POST?

| GET | POST |
|-------|-------|
| Retrieve Data | Create Data |
| No body required | Sends data in body |

---

### Why use try...catch with Fetch?

To handle network and server errors.

---

## Summary

- Fetch API is used for HTTP requests.
- Returns a Promise.
- Common methods:
  - GET
  - POST
  - PUT
  - DELETE
- response.json() converts JSON to JavaScript objects.
- try...catch should always be used.