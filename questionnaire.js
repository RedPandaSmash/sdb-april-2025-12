const readline = require('readline');

// create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// helper to ask a question and await the response
function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        })
    })
}

async function tallyResults(results) {
    console.log("Tallying results...");
    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Results tallied!");
    console.log("Your results are: ", results);
}

// main function to run the questionnaire
async function main() {
    console.log("Welcome to the questionnaire!");

    const name = await askQuestion("What is your name? ");
    const job = await askQuestion("What do you want to do when you grow up? ");
    const pet = await askQuestion("Do you have a pet? ");

    // Log the results
    console.log(`Your name is ${name}, you want to be a ${job}, and you have a pet: ${pet}`);

    // Create an object to hold the results
    const results = {
        name: name,
        job: job,
        pet: pet
    };

    // Tally the results
    await tallyResults(results);

    // Close the readline interface
    rl.close();
}

// run the main function
main()
    .then(() => {
        console.log("Thank you for completing the questionnaire!");
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    })