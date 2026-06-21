# JavaScript Local Storage

## What is Local Storage?

Local Storage is a browser feature that allows websites to store data permanently on the user's device.

The data remains available even after:

- Refreshing the page
- Closing the browser
- Restarting the computer

---

## Why Use Local Storage?

Common use cases:

- Dark Mode Preference
- Shopping Cart Data
- User Settings
- Notes Applications
- Todo Applications
- Remember Me Features

---

## Storage Methods

### setItem()

Stores data.

```javascript
localStorage.setItem(
    "name",
    "Shuvo"
);
```

---

### getItem()

Retrieves data.

```javascript
const name =
    localStorage.getItem("name");
```

---

### removeItem()

Removes a specific item.

```javascript
localStorage.removeItem(
    "name"
);
```

---

### clear()

Removes everything.

```javascript
localStorage.clear();
```

---

## Storing Objects

Local Storage can only store strings.

Incorrect:

```javascript
localStorage.setItem(
    "student",
    student
);
```

Correct:

```javascript
localStorage.setItem(
    "student",
    JSON.stringify(student)
);
```

---

## Retrieving Objects

```javascript
const student =
    JSON.parse(
        localStorage.getItem("student")
    );
```

---

## JSON.stringify()

Converts JavaScript object → JSON string.

```javascript
JSON.stringify(student);
```

---

## JSON.parse()

Converts JSON string → JavaScript object.

```javascript
JSON.parse(data);
```

---

## Real-Life Example

Dark Mode Preference

```javascript
localStorage.setItem(
    "theme",
    "dark"
);
```

Next visit:

```javascript
const theme =
    localStorage.getItem(
        "theme"
    );
```

The application remembers the user's choice.

---

## Interview Questions

### What is Local Storage?

A browser storage mechanism used to store data persistently.

---

### Does Local Storage expire?

No.

Data remains until:

- User clears browser data
- Application removes it

---

### Can Local Storage store objects?

Not directly.

Use:

```javascript
JSON.stringify()
```

before storing.

---

### Difference Between Local Storage and Session Storage?

| Local Storage | Session Storage |
|--------------|----------------|
| Permanent | Temporary |
| Survives browser restart | Deleted when tab closes |

---

## Summary

- Local Storage stores data in the browser.
- Data remains after refresh and restart.
- Methods:
  - setItem()
  - getItem()
  - removeItem()
  - clear()
- Objects require:
  - JSON.stringify()
  - JSON.parse()