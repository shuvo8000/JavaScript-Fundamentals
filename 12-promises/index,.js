// Creating a Promise

const myPromise = new Promise(
    (resolve, reject) => {

        let success = true;

        if (success) {
            resolve("Operation Successful");
        } else {
            reject("Operation Failed");
        }
    }
);

// Handling Promise

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise Completed");
    });