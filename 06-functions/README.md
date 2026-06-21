# JavaScript Functions

## What is a Function?

A function is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, we can place it inside a function and call it whenever needed.

---

## Why Do We Use Functions?

- Reduce code duplication
- Improve code readability
- Make code easier to maintain
- Reuse logic multiple times

---

## Function Declaration

```javascript
function greet() {
    console.log("Hello JavaScript");
}

greet();
```

### Output

```
Hello JavaScript
```

---

## Function with Parameters

Parameters allow us to pass data into a function.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

### Output

```
30
```

Here:
- `a` and `b` are parameters
- `10` and `20` are arguments

---

## Return Statement

The `return` keyword sends a value back from the function.

```javascript
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result);
```

### Output

```
20
```

---

## Function Expression

Functions can also be stored inside variables.

```javascript
const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(20, 5));
```

### Output

```
15
```

---

## Arrow Function (ES6)

Arrow functions provide a shorter syntax.

```javascript
const divide = (a, b) => {
    return a / b;
};

console.log(divide(20, 4));
```

### Output

```
5
```

---

## Short Arrow Function

```javascript
const square = num => num * num;

console.log(square(5));
```

### Output

```
25
```

---

## Real-Life Example

Calculate student GPA points:

```javascript
function calculateTotal(subject1, subject2) {
    return subject1 + subject2;
}

console.log(calculateTotal(85, 90));
```

Output:

```
175
```

---

## Interview Questions

### What is the difference between parameters and arguments?

```javascript
function add(a, b) {
    return a + b;
}

add(10, 20);
```

Parameters:
- a
- b

Arguments:
- 10
- 20

---

### What is an Arrow Function?

An arrow function is a shorter way to write functions introduced in ES6.

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

## Summary

- Functions are reusable blocks of code.
- Parameters receive values.
- Arguments send values.
- `return` sends data back.
- Arrow functions provide shorter syntax.