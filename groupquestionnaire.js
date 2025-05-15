const readline = require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askWhatsUp(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        })
    })
}


async function main() {
    console.log("Please answer the following questions so that we can get to know you:");

    const name = await askWhatsUp("What is your name?");
    const color = await askWhatsUp("What is your favorite color?");
    const season = await askWhatsUp("Which is your favorite season?");
    const vacation = await askWhatsUp("Do you have any vacation plans this year?");
    const car = await askWhatsUp("What do you drive?");




console.log(`Your name is ${name}. Your favorite color is ${color}. You love ${season}. You'd like to drive your ${car} to ${vacation} for your getaway!`);

const results = {
    name: name,
    color: color,
    season: season,
    vacation: vacation,
    car: car
};

rl.close();

}

main()
    .then(() => {
        console.log("Thank you for letting us get to know you!...and sell your info to hackers.")
    })
    .catch((error) =>{
        console.log("you messed up")
    })
