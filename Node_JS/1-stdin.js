const readline = require("readline");
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const ask = (question) => {
    rline.question(question, (answer) => {
        rline.write(`Your name is: ${answer}\n`);
        console.log("This important software is now closing");
        rline.close();
        process.exit(0);
    })
}
ask("Welcome to Holberton School, what is your name?\n");