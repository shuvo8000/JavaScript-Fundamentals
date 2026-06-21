# JavaScript DOM

## What is DOM?

DOM stands for Document Object Model.

When a web page loads, the browser creates a DOM tree from the HTML document.

JavaScript can use the DOM to:

- Access HTML elements
- Modify content
- Change styles
- Create new elements
- Remove elements
- Handle events

---

## DOM Tree Example

```html
<body>
    <h1>Hello</h1>
    <p>Paragraph</p>
</body>
```

DOM Representation:

Document
 └── Body
      ├── H1
      └── P

```

---

## Selecting Elements

### getElementById()

```javascript
const title =
    document.getElementById("title");
```

Selects an element using its ID.

Example:

```html
<h1 id="title">Hello</h1>
```

---

## querySelector()

```javascript
const title =
    document.querySelector("#title");
```

Selects the first matching element.

---

## querySelectorAll()

```javascript
const items =
    document.querySelectorAll(".item");
```

Returns all matching elements.

---

## Changing Content

### textContent

```javascript
title.textContent =
    "Hello JavaScript";
```

Before:

```html
<h1>Hello World</h1>
```

After:

```html
<h1>Hello JavaScript</h1>
```

---

## Changing Styles

```javascript
title.style.color = "blue";

title.style.fontSize = "40px";
```

---

## Creating Elements

```javascript
const paragraph =
    document.createElement("p");
```

---

## Adding Elements

```javascript
document.body.appendChild(paragraph);
```

Adds the element to the page.

---

## Removing Elements

```javascript
paragraph.remove();
```

Removes the element.

---

## Real-Life Example

Show a welcome message.

```javascript
const heading =
    document.getElementById("title");

heading.textContent =
    "Welcome Shuvo";
```

---

## Interview Questions

### What is DOM?

DOM is a programming interface that represents an HTML document as objects.

JavaScript uses the DOM to interact with web pages.

---

### Difference between HTML and DOM?

| HTML | DOM |
|--------|--------|
| Static document | Dynamic representation |
| Written by developer | Created by browser |

---

### Difference between textContent and innerHTML?

textContent:

```javascript
element.textContent =
    "<h1>Hello</h1>";
```

Output:

```text
<h1>Hello</h1>
```

innerHTML:

```javascript
element.innerHTML =
    "<h1>Hello</h1>";
```

Output:

```html
<h1>Hello</h1>
```

---

## Summary

- DOM = Document Object Model
- JavaScript uses DOM to manipulate web pages
- Common methods:
  - getElementById()
  - querySelector()
  - querySelectorAll()
- Can change content and styles
- Can create and remove elements