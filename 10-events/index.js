// Click Event

const button =
    document.getElementById("btn");

button.addEventListener("click", () => {
    alert("Button Clicked!");
});

// Input Event

const input =
    document.getElementById("nameInput");

input.addEventListener("input", (event) => {
    console.log(
        "Typing:",
        event.target.value
    );
});

// Keyboard Event

document.addEventListener("keydown", (event) => {
    console.log(
        "Key Pressed:",
        event.key
    );
});