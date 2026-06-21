# JavaScript Objects

## What is an Object?

An object is a collection of related data stored as key-value pairs.

Objects help us represent real-world entities such as students, employees, products, etc.

---

## Creating an Object

```javascript
const student = {
    name: "Shuvo",
    age: 23,
    cgpa: 3.77
};
```

### Output

```javascript
{
  name: "Shuvo",
  age: 23,
  cgpa: 3.77
}
```

---

## Accessing Object Properties

### Dot Notation

```javascript
console.log(student.name);
```

### Bracket Notation

```javascript
console.log(student["cgpa"]);
```

---

## Adding New Properties

```javascript
student.department = "CSE";
```

### Result

```javascript
{
  name: "Shuvo",
  age: 23,
  cgpa: 3.77,
  department: "CSE"
}
```

---

## Updating Properties

```javascript
student.cgpa = 3.80;
```

---

## Deleting Properties

```javascript
delete student.age;
```

---

## Object Methods

Objects can contain functions.

```javascript
const person = {
    firstName: "Shuvo",

    greet() {
        console.log("Hello");
    }
};
```

These functions are called methods.

---

## The this Keyword

```javascript
const person = {
    firstName: "Shuvo",

    fullName() {
        return this.firstName;
    }
};
```

`this` refers to the current object.

---

## Nested Objects

Objects can contain other objects.

```javascript
const university = {
    student: {
        name: "Shuvo"
    }
};
```

Access:

```javascript
console.log(university.student.name);
```

---

## Object Destructuring

Extract properties into variables.

```javascript
const student = {
    name: "Shuvo",
    cgpa: 3.77
};

const { name, cgpa } = student;
```

---

## Spread Operator

Copy or extend objects.

```javascript
const updatedStudent = {
    ...student,
    semester: 8
};
```

---

## Real-Life Example

Student Information System

```javascript
const student = {
    name: "Shuvo",
    id: "2022-1-60-001",
    department: "CSE",
    cgpa: 3.77
};
```

This is how objects are commonly used in web applications and APIs.

---

## Interview Questions

### What is the difference between an Array and an Object?

| Array | Object |
|---------|---------|
| Ordered collection | Key-value collection |
| Uses index | Uses keys |
| Example: [1,2,3] | Example: {name:"Shuvo"} |

---

### What is Object Destructuring?

A way to extract object properties into variables.

```javascript
const { name } = student;
```

---

### What is the Spread Operator?

Used to copy or merge objects.

```javascript
const copy = { ...student };
```

---

## Summary

- Objects store data as key-value pairs.
- Properties can be added, updated, and deleted.
- Objects can contain methods.
- Nested objects are common in real applications.
- Destructuring and Spread Operator are important ES6 features.