// Creating an Object

const student = {
    name: "Shuvo",
    age: 23,
    cgpa: 3.77
};

console.log(student);

// Access Properties

console.log(student.name);
console.log(student["cgpa"]);

// Add Property

student.department = "CSE";

console.log(student);

// Update Property

student.cgpa = 3.80;

console.log(student);

// Delete Property

delete student.age;

console.log(student);

// Object Method

const person = {
    firstName: "Shuvo",
    lastName: "Biswas",

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName());

// Nested Object

const university = {
    name: "Southeast University",

    student: {
        name: "Shuvo",
        cgpa: 3.77
    }
};

console.log(university.student.name);

// Object Destructuring

const { name, cgpa } = student;

console.log(name);
console.log(cgpa);

// Spread Operator

const updatedStudent = {
    ...student,
    semester: 8
};

console.log(updatedStudent);