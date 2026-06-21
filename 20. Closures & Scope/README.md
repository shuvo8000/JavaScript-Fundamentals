# JavaScript Closures & Scope

## What is Scope?

Scope determines where variables can be accessed.

Think of scope as the visibility area of a variable.

---

## Types of Scope

### Global Scope

Variables declared outside functions.

```javascript
const name = "Shuvo";
```

Accessible everywhere.

---

### Function Scope

Variables declared inside a function.

```javascript
function greet() {

    const message =
        "Hello";
}
```

Only accessible inside the function.

---

### Block Scope

Variables declared using:

```javascript
let
const
```

inside:

```javascript
if
for
while
{}
```

Example:

```javascript
if(true){

    let age = 23;
}
```

Cannot access age outside the block.

---

## What is a Closure?

A closure is a function that remembers variables from its outer scope even after the outer function has finished execution.

---

## Basic Closure Example

```javascript
function outerFunction() {

    let count = 0;

    return function() {

        count++;

        console.log(count);
    };
}
```

Even after outerFunction finishes, count still exists.

---

## Why Closures Work?

JavaScript remembers the lexical environment where the function was created.

The inner function keeps access to variables from the outer function.

---

## Real-Life Example

Private Counter

```javascript
function createCounter() {

    let count = 0;

    return function() {

        count++;

        return count;
    };
}
```

Usage:

```javascript
const counter =
    createCounter();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

---

## Benefits of Closures

### Data Privacy

```javascript
function createUser() {

    let password =
        "secret";

    return {

        checkPassword() {

            return password;
        }
    };
}
```

The password cannot be accessed directly.

---

### State Management

Closures allow functions to remember values between calls.

Used in:

- React Hooks
- Event Handlers
- Timers
- Caching

---

## Interview Questions

### What is a Closure?

A closure is a function that remembers variables from its outer scope even after that outer function has finished executing.

---

### Why are Closures Useful?

- Data hiding
- Private variables
- State management
- Callbacks
- Event handlers

---

### Difference Between Scope and Closure?

Scope:
- Determines where variables are accessible.

Closure:
- Allows a function to remember variables from its outer scope.

---

## Summary

- Scope controls variable visibility.
- Types:
  - Global Scope
  - Function Scope
  - Block Scope
- Closures remember outer variables.
- Closures enable private data and state management.
- Frequently asked in JavaScript interviews.