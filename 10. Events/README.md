# JavaScript Events

## What is an Event?

An event is an action that occurs in the browser.

Examples:

- Clicking a button
- Typing in an input field
- Submitting a form
- Pressing a keyboard key
- Moving the mouse

JavaScript can listen for these actions and execute code.

---

## Event Listener

The most common way to handle events is using:

```javascript
element.addEventListener(
    "eventName",
    callbackFunction
);
```

Example:

```javascript
button.addEventListener(
    "click",
    () => {
        console.log("Clicked");
    }
);
```

---

## Click Event

Runs when a user clicks an element.

```javascript
button.addEventListener(
    "click",
    () => {
        alert("Button Clicked!");
    }
);
```

---

## Input Event

Runs whenever the value of an input changes.

```javascript
input.addEventListener(
    "input",
    (event) => {
        console.log(event.target.value);
    }
);
```

### event.target.value

Returns the current input value.

---

## Keyboard Event

Runs when a keyboard key is pressed.

```javascript
document.addEventListener(
    "keydown",
    (event) => {
        console.log(event.key);
    }
);
```

Example Output:

```text
a
b
Enter
Space
```

---

## Form Submit Event

Example:

```javascript
form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        console.log("Form Submitted");
    }
);
```

### event.preventDefault()

Prevents page refresh.

---

## Mouse Events

Common mouse events:

| Event | Description |
|---------|-------------|
| click | Mouse click |
| dblclick | Double click |
| mouseover | Mouse enters |
| mouseout | Mouse leaves |
| mousemove | Mouse moves |

Example:

```javascript
element.addEventListener(
    "mouseover",
    () => {
        console.log("Mouse Over");
    }
);
```

---

## Event Object

Every event handler receives an event object.

```javascript
button.addEventListener(
    "click",
    (event) => {
        console.log(event);
    }
);
```

Useful properties:

```javascript
event.target
event.type
event.key
```

---

## Real-Life Example

Display user name while typing.

```javascript
input.addEventListener(
    "input",
    (event) => {

        heading.textContent =
            event.target.value;
    }
);
```

---

## Interview Questions

### What is an Event?

An event is an action or occurrence in the browser that JavaScript can detect and respond to.

Examples:
- click
- input
- submit
- keydown

---

### What is addEventListener()?

Used to attach an event handler to an element.

```javascript
element.addEventListener(
    "click",
    callback
);
```

---

### What is event.preventDefault()?

Prevents the browser's default behavior.

Example:

```javascript
event.preventDefault();
```

Used mostly in forms.

---

### Difference between click and dblclick?

click:
- Runs once

dblclick:
- Runs after double click

---

## Summary

- Events make websites interactive.
- addEventListener() is the standard way to handle events.
- Common events:
  - click
  - input
  - submit
  - keydown
  - mouseover
- Event object provides useful information.