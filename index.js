// prompt the user for a string
process.stdout.write("What is for dinner?");

// listen for the user input
process.stdin.once("data", (data) => {
    console.log("You said: " + data.toString().trim());
    process.exit(0);
})