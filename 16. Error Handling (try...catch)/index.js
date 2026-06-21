// Basic try...catch

try {

    const result = 10 / 2;

    console.log(result);

} catch (error) {

    console.log("Something went wrong");

}



// Handling Undefined Variables

try {

    console.log(userName);

} catch (error) {

    console.log(
        "Error:",
        error.message
    );

}




// finally Block

try {

    console.log("Running...");

} catch (error) {

    console.log(error);

} finally {

    console.log(
        "Always Executes"
    );

}




// Custom Error

function checkAge(age) {

    if (age < 18) {

        throw new Error(
            "Age must be 18 or above"
        );

    }

    return "Access Granted";
}

try {

    console.log(
        checkAge(15)
    );

} catch (error) {

    console.log(
        error.message
    );

}