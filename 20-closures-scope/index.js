// Global Scope
const name = "Shuvo";

function showName() {
    console.log(name);
}

showName();



// Function Scope

function greet() {

    const message =
        "Hello";

    console.log(message);
}

greet();

// console.log(message);
// Error



// Block Scope
if (true) {

    let age = 23;

    const cgpa = 3.77;

    console.log(age);
}

 // console.log(age);
// Error


// Closure Example
function outerFunction() {

    let count = 0;

    return function innerFunction() {

        count++;

        console.log(count);
    };
}

const counter =
    outerFunction();

counter();
counter();
counter();

// Output:

// 1
// 2
// 3


// Real-Life Closure Example

function createBankAccount() {

    let balance = 0;

    return {

        deposit(amount) {

            balance += amount;

            console.log(
                `Balance: ${balance}`
            );
        },

        withdraw(amount) {

            balance -= amount;

            console.log(
                `Balance: ${balance}`
            );
        }
    };
}

const account =
    createBankAccount();

account.deposit(1000);
account.withdraw(200);