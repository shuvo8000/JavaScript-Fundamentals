const numbers = [10, 20, 30, 40, 50];

// find()

const found =
    numbers.find(
        num => num > 25
    );

console.log("Find:", found);

// findIndex()

const index =
    numbers.findIndex(
        num => num > 25
    );

console.log("Find Index:", index);

// some()

const hasLargeNumber =
    numbers.some(
        num => num > 45
    );

console.log("Some:", hasLargeNumber);

// every()

const allPositive =
    numbers.every(
        num => num > 0
    );

console.log("Every:", allPositive);

// includes()

console.log(
    "Includes:",
    numbers.includes(30)
);

// sort()

const randomNumbers =
    [5, 2, 8, 1, 4];

randomNumbers.sort(
    (a, b) => a - b
);

console.log(
    "Sorted:",
    randomNumbers
);

// flatMap()

const words =
    ["Hello World", "JavaScript"];

const result =
    words.flatMap(
        word => word.split(" ")
    );

console.log(
    "FlatMap:",
    result
);