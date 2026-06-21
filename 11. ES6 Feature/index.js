// Template Literals

const name = "Shuvo";

console.log(`Hello, ${name}!`);

// Destructuring

const student = {
    fullName: "Shuvo Biswas",
    cgpa: 3.77
};

const { fullName, cgpa } = student;

console.log(fullName);
console.log(cgpa);

// Spread Operator

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combined = [
    ...numbers1,
    ...numbers2
];

console.log(combined);

// Rest Operator

function sum(...numbers) {

    return numbers.reduce(
        (total, num) => total + num,
        0
    );
}

console.log(sum(10, 20, 30));

// Default Parameters

function greet(user = "Guest") {
    console.log(`Hello ${user}`);
}

greet();
greet("Shuvo");

// Arrow Function

const square = num => num * num;

console.log(square(5));