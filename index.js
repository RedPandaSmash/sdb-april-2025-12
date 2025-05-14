// prompt the user for a string
process.stdout.write("What is for dinner?");

// listen for the user input
// process.stdin.once("data", (data) => {
//     console.log("You said: " + data.toString().trim());
//     process.exit(0);
// })

let myName = "Jimmy";

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

function welcomeToUprightEducation() {
    console.log("Welcome to Upright Education!");
}

greetUser(myName, welcomeToUprightEducation);


// promise example
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!resolve) {
            resolve("successful");
        } else {
            reject("failed");
        }
    }, 5000)
})

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    })
    .finally(() => {
        console.log("THE PROMISE CHAIN IS COMPLETE")
    })


// promise example to simulate an API call
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve({ name: "Jane", age: 30 })
            } else {
                reject("Failed to fetch user data");
            }
        }, 1000)
    })
}

// use the promise
fetchUserData()
    .then((data) => {
        console.log("User data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Fetch user data operation completed.");
    })