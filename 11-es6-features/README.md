# ES6 Features

## What is ES6?

ES6 (ECMAScript 2015) is a major update to JavaScript.

It introduced modern syntax and features that make code:

- Cleaner
- Shorter
- Easier to read
- Easier to maintain

Most modern JavaScript applications use ES6.

---

## Template Literals

Before ES6:

```javascript
const name = "Shuvo";

console.log("Hello " + name);
```

ES6:

```javascript
const name = "Shuvo";

console.log(`Hello ${name}`);
```

### Benefits

- Easier string interpolation
- Supports multi-line strings

---

## Destructuring

Extract values from objects or arrays.

```javascript
const student = {
    name: "Shuvo",
    cgpa: 3.77
};

const { name, cgpa } = student;
```

Instead of:

```javascript
const name = student.name;
const cgpa = student.cgpa;
```

---

## Spread Operator (...)

Used to copy or merge arrays and objects.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

const result = [
    ...arr1,
    ...arr2
];
```

Output:

```javascript
[1, 2, 3, 4]
```

---

## Rest Operator (...)

Collects multiple values into a single array.

```javascript
function sum(...numbers) {
    return numbers;
}
```

Call:

```javascript
sum(1, 2, 3, 4);
```

Result:

```javascript
[1, 2, 3, 4]
```

---

## Default Parameters

Provide default values.

```javascript
function greet(name = "Guest") {
    console.log(name);
}
```

Example:

```javascript
greet();
```

Output:

```text
Guest
```

---

## Arrow Functions

Shorter syntax for functions.

Traditional:

```javascript
function square(num) {
    return num * num;
}
```

Arrow:

```javascript
const square =
    num => num * num;
```

---

## Real-Life Example

Student Information

```javascript
const student = {
    name: "Shuvo",
    cgpa: 3.77
};

const {
    name,
    cgpa
} = student;

console.log(
    `${name} has CGPA ${cgpa}`
);
```

Output:

```text
Shuvo has CGPA 3.77
```

---

## Interview Questions

### What is ES6?

ES6 is a major JavaScript update released in 2015 that introduced modern features like:

- let
- const
- Arrow Functions
- Destructuring
- Spread Operator
- Template Literals

---

### Difference between Spread and Rest Operator?

Spread:

```javascript
const arr = [...numbers];
```

Expands values.

Rest:

```javascript
function sum(...numbers) {}
```

Collects values.

---

### Why are Arrow Functions popular?

- Short syntax
- Cleaner code
- Commonly used in React and modern JavaScript

---

## Summary

- Template Literals improve string handling.
- Destructuring extracts values easily.
- Spread copies and merges data.
- Rest collects values.
- Default Parameters prevent undefined values.
- Arrow Functions provide cleaner syntax.