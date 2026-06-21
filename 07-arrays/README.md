# JavaScript Arrays

## What is an Array?

An array is a special variable that can store multiple values in a single variable.

Instead of creating many variables, we can store related data inside an array.

---

## Creating an Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];
```

### Output

```text
["Apple", "Banana", "Mango"]
```

---

## Accessing Array Elements

Array indexing starts from 0.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
```

### Output

```text
Apple
```

---

## push()

Adds an element at the end of the array.

```javascript
fruits.push("Orange");
```

### Before

```javascript
["Apple", "Banana", "Mango"]
```

### After

```javascript
["Apple", "Banana", "Mango", "Orange"]
```

---

## pop()

Removes the last element.

```javascript
fruits.pop();
```

---

## shift()

Removes the first element.

```javascript
fruits.shift();
```

---

## unshift()

Adds an element to the beginning.

```javascript
fruits.unshift("Apple");
```

---

## forEach()

Executes a function for every array element.

```javascript
fruits.forEach(fruit => {
    console.log(fruit);
});
```

---

## map()

Creates a new array by transforming each element.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
```

### Output

```javascript
[2, 4, 6]
```

---

## filter()

Creates a new array containing elements that satisfy a condition.

```javascript
const even = numbers.filter(num => num % 2 === 0);
```

### Output

```javascript
[2]
```

---

## reduce()

Reduces an array to a single value.

```javascript
const total = numbers.reduce(
    (sum, num) => sum + num,
    0
);
```

### Output

```javascript
6
```

---

## Real-Life Example

Calculate total marks.

```javascript
const marks = [80, 75, 90];

const total = marks.reduce(
    (sum, mark) => sum + mark,
    0
);

console.log(total);
```

### Output

```text
245
```

---

## Most Important Array Methods

| Method | Purpose |
|----------|----------|
| push() | Add at end |
| pop() | Remove from end |
| shift() | Remove from start |
| unshift() | Add at start |
| forEach() | Loop through array |
| map() | Transform data |
| filter() | Filter data |
| reduce() | Generate single value |

---

## Interview Questions

### Difference between map() and forEach()?

**forEach()**
- Executes code for each element
- Does not return a new array

**map()**
- Returns a new array
- Used for transforming data

---

### Difference between filter() and find()?

**filter()**
Returns multiple matching elements.

```javascript
const result = numbers.filter(num => num > 2);
```

**find()**
Returns the first matching element.

```javascript
const result = numbers.find(num => num > 2);
```

---

## Summary

- Arrays store multiple values.
- Arrays use zero-based indexing.
- push(), pop(), shift(), unshift() modify arrays.
- map(), filter(), reduce() are commonly used in modern JavaScript.