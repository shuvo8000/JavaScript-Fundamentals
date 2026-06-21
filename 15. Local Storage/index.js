// Save Data

localStorage.setItem(
    "name",
    "Shuvo"
);

// Get Data

const name =
    localStorage.getItem("name");

console.log(name);

// Remove Data

localStorage.removeItem("name");

// Clear All Data

localStorage.clear();



// Store Object

const student = {
    name: "Shuvo",
    cgpa: 3.77
};

localStorage.setItem(
    "student",
    JSON.stringify(student)
);



// Retrieve Object

const student =
    JSON.parse(
        localStorage.getItem("student")
    );

console.log(student);



// Full Example

const saveBtn =
    document.getElementById("saveBtn");

const getBtn =
    document.getElementById("getBtn");

saveBtn.addEventListener(
    "click",
    () => {

        localStorage.setItem(
            "name",
            "Shuvo"
        );

        console.log(
            "Name Saved"
        );
    }
);

getBtn.addEventListener(
    "click",
    () => {

        const name =
            localStorage.getItem(
                "name"
            );

        console.log(name);
    }
);