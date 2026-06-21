// GET Request

async function getPosts() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.error(error);

    }
}

getPosts();



// GET Single Post

async function getPost() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    const data = await response.json();

    console.log(data);
}

getPost();



// POST Request

async function createPost() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                title: "JavaScript",
                body: "Learning Fetch API",
                userId: 1
            })
        }
    );

    const data = await response.json();

    console.log(data);
}

createPost();


// PUT Request

async function updatePost() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PUT",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                id: 1,
                title: "Updated Title",
                body: "Updated Content",
                userId: 1
            })
        }
    );

    const data = await response.json();

    console.log(data);
}

updatePost();

// DELETE Request

async function deletePost() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "DELETE"
        }
    );

    console.log(
        "Deleted:",
        response.status
    );
}

deletePost();