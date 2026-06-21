const result =
    document.getElementById("result");

function getValues() {

    const num1 =
        Number(
            document.getElementById("num1").value
        );

    const num2 =
        Number(
            document.getElementById("num2").value
        );

    return { num1, num2 };
}

function add() {

    const { num1, num2 } =
        getValues();

    result.textContent =
        `Result: ${num1 + num2}`;
}

function subtract() {

    const { num1, num2 } =
        getValues();

    result.textContent =
        `Result: ${num1 - num2}`;
}

function multiply() {

    const { num1, num2 } =
        getValues();

    result.textContent =
        `Result: ${num1 * num2}`;
}

function divide() {

    const { num1, num2 } =
        getValues();

    if (num2 === 0) {

        result.textContent =
            "Cannot divide by zero";

        return;
    }

    result.textContent =
        `Result: ${num1 / num2}`;
}

function clearFields() {

    document.getElementById("num1").value = "";

    document.getElementById("num2").value = "";

    result.textContent =
        "Result: 0";
}