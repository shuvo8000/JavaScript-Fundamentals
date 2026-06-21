# Debounce & Throttle

## Why Learn Debounce and Throttle?

Modern web applications receive many events:

- Typing
- Scrolling
- Resizing
- Mouse movement

Running expensive functions on every event can hurt performance.

Debounce and Throttle help solve this problem.

---

## What is Debounce?

Debounce delays function execution until the user stops triggering the event for a specified time.

Example:

Search Box

```javascript
searchInput.addEventListener(
    "input",
    debouncedSearch
);
```

Instead of making an API request for every keystroke:

```text
H
He
Hel
Hell
Hello
```

Debounce waits until the user stops typing.

Only one request is made.

---

## Debounce Example

```javascript
function debounce(
    callback,
    delay
) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);
    };
}
```

---

## Real-Life Use Cases of Debounce

- Search suggestions
- Auto-save forms
- Username availability check
- API requests while typing

---

## What is Throttle?

Throttle limits how often a function can run.

Example:

User scrolls 100 times.

Without throttle:

```text
100 function calls
```

With throttle (1 second):

```text
1 function call per second
```

---

## Throttle Example

```javascript
function throttle(
    callback,
    delay
) {

    let waiting = false;

    return function (...args) {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, delay);
    };
}
```

---

## Real-Life Use Cases of Throttle

- Scroll events
- Window resize events
- Infinite scrolling
- Mouse movement tracking

---

## Debounce vs Throttle

| Debounce | Throttle |
|-----------|-----------|
| Waits for user to stop | Executes at fixed intervals |
| Best for typing | Best for scrolling |
| Reduces unnecessary requests | Limits execution frequency |

---

## Visual Example

Typing:

```text
H
He
Hel
Hell
Hello
```

Debounce:

```text
Only executes once
```

---

Scrolling:

```text
Scroll
Scroll
Scroll
Scroll
```

Throttle:

```text
Runs once every second
```

---

## Interview Questions

### What is Debounce?

A technique that delays function execution until a specified period of inactivity.

---

### What is Throttle?

A technique that limits how often a function can execute.

---

### When should you use Debounce?

- Search boxes
- Auto-save
- Input validation

---

### When should you use Throttle?

- Scroll events
- Resize events
- Mouse tracking

---

### Difference Between Debounce and Throttle?

Debounce:
- Waits for inactivity.

Throttle:
- Executes at fixed intervals.

---

## Summary

- Debounce waits.
- Throttle limits.
- Debounce is best for typing.
- Throttle is best for scrolling.
- Both improve performance.