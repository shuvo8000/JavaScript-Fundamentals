# Advanced Array Methods

## Why Learn These Methods?

Modern JavaScript developers frequently use advanced array methods to:

- Search data
- Validate data
- Transform data
- Sort data
- Process API responses

These methods are very common in React applications.

---

## find()

Returns the first matching element.

```javascript
const numbers =
    [10, 20, 30, 40];

const result =
    numbers.find(
        num => num > 25
    );
```

Output:

```javascript
30
```

---

## findIndex()

Returns the index of the first matching element.

```javascript
const result =
    numbers.findIndex(
        num => num > 25
    );
```

Output:

```javascript
2
```

---

## some()

Checks whether at least one element satisfies a condition.

```javascript
const result =
    numbers.some(
        num => num > 35
    );
```

Output:

```javascript
true
```

---

## every()

Checks whether all elements satisfy a condition.

```javascript
const result =
    numbers.every(
        num => num > 0
    );
```

Output:

```javascript
true
```

---

## includes()

Checks whether an array contains a value.

```javascript
numbers.includes(30);
```

Output:

```javascript
true
```

---

## sort()

Sorts array elements.

Incorrect:

```javascript
[10, 5, 2].sort();
```

Output:

```javascript
[10, 2, 5]
```

Correct:

```javascript
[10, 5, 2].sort(
    (a, b) => a - b
);
```

Output:

```javascript
[2, 5, 10]
```

---

## flatMap()

Maps and flattens arrays.

```javascript
const words =
[
    "Hello World",
    "JavaScript"
];

const result =
    words.flatMap(
        word => word.split(" ")
    );
```

Output:

```javascript
[
    "Hello",
    "World",
    "JavaScript"
]
```

---

## Real-Life Example

Finding a student.

```javascript
const students = [
    {
        id: 1,
        name: "Shuvo"
    },
    {
        id: 2,
        name: "Rahim"
    }
];

const student =
    students.find(
        student =>
        student.id === 1
    );

console.log(student);
```

Output:

```javascript
{
    id: 1,
    name: "Shuvo"
}
```

---

## Interview Questions

### Difference between find() and filter()?

find()

```javascript
numbers.find(
    num => num > 20
);
```

Returns:

```javascript
30
```

filter()

```javascript
numbers.filter(
    num => num > 20
);
```

Returns:

```javascript
[30, 40, 50]
```

---

### Difference between some() and every()?

some()

At least one item must satisfy the condition.

every()

All items must satisfy the condition.

---

### Why use sort((a,b)=>a-b)?

JavaScript sorts strings by default.

For numbers, use:

```javascript
(a, b) => a - b
```

to ensure correct ordering.

---

## Summary

- find() → first matching element
- findIndex() → index of first match
- some() → at least one match
- every() → all match
- includes() → value exists?
- sort() → sort elements
- flatMap() → map and flatten

These methods are frequently used in React and modern JavaScript applications.