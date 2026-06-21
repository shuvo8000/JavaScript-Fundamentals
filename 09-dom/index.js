// Select Element

const title = document.getElementById("title");

console.log(title);

// Change Content

title.textContent = "Hello JavaScript";

// Change Style

title.style.color = "blue";

title.style.fontSize = "40px";

// Create Element

const paragraph = document.createElement("p");

paragraph.textContent =
    "This paragraph was created using JavaScript.";

document.body.appendChild(paragraph);