// Example 1: Call Stack

function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();

console.log("Third");

// Output
// First
// Second
// Third

// Example 2: setTimeout

console.log("Start");

setTimeout(() => {
    console.log("Timer Finished");
}, 0);

console.log("End");
// Output
// Start
// End
// Timer Finished


// Even though the delay is 0, JavaScript executes the synchronous code first.




// Example 3: Event Loop

console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

console.log("3");

// Output
// 1
// 3
// 2



// Example 4: Promise vs setTimeout

console.log("Start");

Promise.resolve()
    .then(() => {
        console.log("Promise");
    });

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

// Output
// Start
// End
// Promise
// Timeout