// if statement

let age = 20;

if (age >= 18) {
    console.log("You can vote.");
}

// if...else statement

let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// else if statement

let score = 75;

if (score >= 80) {
    console.log("Grade A+");
} else if (score >= 70) {
    console.log("Grade A");
} else if (score >= 60) {
    console.log("Grade A-");
} else {
    console.log("Grade B");
}

// switch statement

let day = 3;

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}