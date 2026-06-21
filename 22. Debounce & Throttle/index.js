// Debounce


function debounce(callback, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);
    };
}

function searchData(event) {

    console.log(
        "Searching:",
        event.target.value
    );
}

const debouncedSearch =
    debounce(searchData, 500);

document
    .getElementById("search")
    .addEventListener(
        "input",
        debouncedSearch
    );





// Throttle

function throttle(callback, delay) {

    let shouldWait = false;

    return function (...args) {

        if (shouldWait) return;

        callback(...args);

        shouldWait = true;

        setTimeout(() => {

            shouldWait = false;

        }, delay);
    };
}

function handleScroll() {

    console.log("Scrolling...");
}

window.addEventListener(
    "scroll",
    throttle(handleScroll, 1000)
);