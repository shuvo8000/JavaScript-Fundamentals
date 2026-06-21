# JavaScript Modules

## What are Modules?

Modules allow us to split JavaScript code into multiple files.

Benefits:

- Better organization
- Easier maintenance
- Reusable code
- Cleaner projects

Without modules:

```javascript
// Everything in one file
```

With modules:

```text
math.js
app.js
user.js
api.js
```

Each file has a specific responsibility.

---

## Why Use Modules?

As applications grow:

- Thousands of lines of code
- Multiple developers
- Different features

Modules help manage complexity.

---

## Export

Used to make code available to other files.

Example:

```javascript
export function add(a, b) {
    return a + b;
}
```

---

## Import

Used to use exported code.

```javascript
import {
    add
}
from "./math.js";
```

---

## Named Exports

Export multiple items.

```javascript
export function add() {}

export function subtract() {}
```

Import:

```javascript
import {
    add,
    subtract
}
from "./math.js";
```

---

## Default Export

Export one primary item.

```javascript
export default function multiply() {}
```

Import:

```javascript
import multiply
from "./math.js";
```

Notice:

No curly braces required.

---

## Real-Life Example

Project Structure

```text
src/

├── api.js
├── auth.js
├── user.js
├── product.js
└── app.js
```

Example:

api.js

```javascript
export async function getUsers() {

}
```

app.js

```javascript
import {
    getUsers
}
from "./api.js";
```

---

## Interview Questions

### What is a JavaScript Module?

A file containing reusable code that can be imported into other files.

---

### Difference between Named Export and Default Export?

Named Export:

```javascript
export function add() {}
```

Import:

```javascript
import { add }
from "./file.js";
```

Default Export:

```javascript
export default function add() {}
```

Import:

```javascript
import add
from "./file.js";
```

---

### Why use Modules?

- Better organization
- Reusability
- Scalability
- Maintainability

---

## Summary

- Modules split code into separate files.
- export shares code.
- import uses shared code.
- Named exports use `{}`.
- Default exports do not use `{}`.
- Modules are standard in modern JavaScript projects.