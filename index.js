// prompt the user for a string
process.stdout.write("What is for dinner?");

// listen for the user input
process.stdin.once("data", (data) => {
    console.log("You said: " + data.toString().trim());
    process.exit(0);
})

let myName = "Jimmy";

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

function welcomeToUprightEducation() {
    console.log("Welcome to Upright Education!");
}

greetUser(myName, welcomeToUprightEducation);