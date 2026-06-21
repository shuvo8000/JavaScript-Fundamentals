// for loop

console.log("For Loop:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop

console.log("While Loop:");

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// do...while loop

console.log("Do While Loop:");

let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 5);

// break

console.log("Break Example:");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}

// continue

console.log("Continue Example:");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        continue;
    }

    console.log(i);
}