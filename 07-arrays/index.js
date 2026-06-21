// Creating Arrays

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

// Accessing Elements

console.log("First Fruit:", fruits[0]);

// push()

fruits.push("Orange");
console.log("After Push:", fruits);

// pop()

fruits.pop();
console.log("After Pop:", fruits);

// shift()

fruits.shift();
console.log("After Shift:", fruits);

// unshift()

fruits.unshift("Apple");
console.log("After Unshift:", fruits);

// forEach()

fruits.forEach((fruit) => {
    console.log(fruit);
});

// map()

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log("Map:", doubled);

// filter()

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Filter:", evenNumbers);

// reduce()

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log("Reduce:", total);