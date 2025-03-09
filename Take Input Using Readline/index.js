let readline = require("readline");
let input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Enter Your name: ", (name) => {
  console.log("Your Name Is: " + " " + name);
  input.close();
});
