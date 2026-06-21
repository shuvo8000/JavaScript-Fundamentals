# Object-Oriented Programming (OOP)

## What is OOP?

Object-Oriented Programming (OOP) is a programming paradigm that organizes code using objects and classes.

It helps developers:

- Reuse code
- Organize large projects
- Improve maintainability
- Model real-world entities

Examples:

- Student Management System
- Banking System
- E-Commerce Application
- Hospital Management System

---

## What is a Class?

A class is a blueprint for creating objects.

```javascript
class Student {

    constructor(name) {

        this.name = name;
    }
}
```

Think of a class as a design template.

---

## What is an Object?

An object is an instance of a class.

```javascript
const student =
    new Student("Shuvo");
```

Here:

- Student = Class
- student = Object

---

## Constructor

The constructor runs automatically when an object is created.

```javascript
constructor(name) {

    this.name = name;
}
```

Used to initialize object properties.

---

## Methods

Methods are functions inside classes.

```javascript
introduce() {

    console.log(
        this.name
    );
}
```

---

## The this Keyword

`this` refers to the current object.

```javascript
this.name
```

Example:

```javascript
student.name
```

---

## Inheritance

Inheritance allows one class to inherit properties and methods from another class.

```javascript
class Student
extends Person {

}
```

Benefits:

- Reuse existing code
- Avoid duplication

---

## super()

Calls the parent class constructor.

```javascript
super(name);
```

Required when extending classes.

---

## Encapsulation

Encapsulation hides internal data from direct access.

```javascript
#balance = 0;
```

Only class methods can access private data.

---

## Real-Life Example

Student Portal

```javascript
class Student {

    constructor(
        name,
        cgpa
    ) {

        this.name = name;
        this.cgpa = cgpa;
    }
}
```

Create Students:

```javascript
const student1 =
    new Student(
        "Shuvo",
        3.77
    );
```

---

## Four Pillars of OOP

### 1. Encapsulation

Hide internal data.

### 2. Inheritance

Reuse existing code.

### 3. Polymorphism

Same method behaves differently.

### 4. Abstraction

Hide implementation details.

---

## Interview Questions

### What is OOP?

A programming paradigm based on classes and objects.

---

### Difference between Class and Object?

| Class | Object |
|---------|---------|
| Blueprint | Instance |
| Template | Real entity |

---

### What is Inheritance?

Allows one class to acquire properties and methods from another class.

---

### What is Encapsulation?

Protecting data from direct access.

---

### What is the purpose of constructor()?

To initialize object properties when an object is created.

---

## Summary

- Class = Blueprint
- Object = Instance
- Constructor initializes data
- Methods define behavior
- Inheritance promotes code reuse
- Encapsulation protects data
- OOP is heavily used in large applications