// Function returning a Promise

function fetchData() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data Received");
        }, 2000);

    });
}

// Async Function

async function getData() {

    try {

        const result =
            await fetchData();

        console.log(result);

    } catch (error) {

        console.log(error);

    } finally {

        console.log("Process Completed");
    }
}

getData();


// API Example//


async function getPost() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts/1"
            );

        const data =
            await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

getPost();