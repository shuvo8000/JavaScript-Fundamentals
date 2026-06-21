// math.js

// Named Exports

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}


// app.js
// Import Named Exports

import {
    add,
    subtract
}
from "./math.js";

console.log(
    add(10, 5)
);

console.log(
    subtract(10, 5)
);


// Default Export Example


// math.js
export default function multiply(a, b) {
    return a * b;
}
// app.js
import multiply
from "./math.js";

console.log(
    multiply(10, 5)
);