// Function Declaration

function greet() {
    console.log("Hello JavaScript");
}

greet();

// Function with Parameters

function add(a, b) {
    console.log("Sum:", a + b);
}

add(10, 20);

// Function with Return

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);
console.log("Result:", result);

// Function Expression

const subtract = function(a, b) {
    return a - b;
};

console.log("Subtract:", subtract(20, 5));

// Arrow Function

const divide = (a, b) => {
    return a / b;
};

console.log("Divide:", divide(20, 4));

// Short Arrow Function

const square = num => num * num;

console.log("Square:", square(5));