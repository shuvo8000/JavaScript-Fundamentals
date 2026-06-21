// Class

class Student {

    constructor(name, cgpa) {

        this.name = name;
        this.cgpa = cgpa;
    }

    introduce() {

        console.log(
            `Hi, I'm ${this.name}`
        );
    }
}



// Create Object

const student1 =
    new Student(
        "Shuvo",
        3.77
    );

student1.introduce();

console.log(student1);



// Inheritance

class Person {

    constructor(name) {

        this.name = name;
    }

    greet() {

        console.log(
            `Hello, ${this.name}`
        );
    }
}

class Student extends Person {

    constructor(name, cgpa) {

        super(name);

        this.cgpa = cgpa;
    }

    showCGPA() {

        console.log(
            `CGPA: ${this.cgpa}`
        );
    }
}

const student =
    new Student(
        "Shuvo",
        3.77
    );

student.greet();
student.showCGPA();



// Encapsulation (Private Fields)

class BankAccount {

    #balance = 0;

    deposit(amount) {

        this.#balance += amount;
    }

    getBalance() {

        return this.#balance;
    }
}

const account =
    new BankAccount();

account.deposit(5000);

console.log(
    account.getBalance()
);