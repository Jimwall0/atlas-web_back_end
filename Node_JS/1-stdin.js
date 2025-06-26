const readline = require("readline");
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const ask = (question) => {
    rline.question(question, (answer) => {
        rline.write(`Your name is: ${answer}`);
        ask(question)
    })
}
ask("Welcome to Holberton School, what is your name?\n");