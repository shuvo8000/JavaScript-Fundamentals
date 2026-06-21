# JavaScript Error Handling

## What is Error Handling?

Error handling is the process of managing unexpected situations without crashing the application.

Examples:

- API Failure
- Invalid User Input
- Missing Variables
- Network Errors
- Database Errors

---

## Why is Error Handling Important?

Without error handling:

```javascript
console.log(userName);
```

Output:

```text
ReferenceError
```

Application may stop working.

With error handling:

```javascript
try {

    console.log(userName);

} catch(error) {

    console.log(
        "User not found"
    );
}
```

The application continues running.

---

## try Block

Contains code that may produce an error.

```javascript
try {

    console.log(userName);

}
```

---

## catch Block

Handles errors.

```javascript
catch(error) {

    console.log(error);
}
```

---

## Error Object

```javascript
catch(error) {

    console.log(error.name);

    console.log(error.message);
}
```

Example:

```text
ReferenceError
userName is not defined
```

---

## finally Block

Always executes.

```javascript
finally {

    console.log(
        "Cleanup Complete"
    );
}
```

Runs whether an error occurs or not.

---

## throw Keyword

Creates custom errors.

```javascript
throw new Error(
    "Invalid Age"
);
```

---

## Real-Life Example

Checking user age.

```javascript
function checkAge(age) {

    if(age < 18) {

        throw new Error(
            "Access Denied"
        );
    }

    return "Access Granted";
}
```

---

## Interview Questions

### What is try...catch?

A mechanism for handling runtime errors.

---

### What does finally do?

Runs regardless of success or failure.

---

### What is throw?

Used to create custom errors.

```javascript
throw new Error(
    "Invalid Input"
);
```

---

### Why use error handling?

To prevent applications from crashing and improve user experience.

---

## Summary

- try contains risky code.
- catch handles errors.
- finally always executes.
- throw creates custom errors.
- Error handling is essential in real-world applications.