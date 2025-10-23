const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});


// rl.question("$ ", (answer) => {
//   console.log(`${answer}: command not found`);
//   // rl.close();
// });

rl.prompt();
rl.on('line', (answer) => {
  console.log(`${answer}: command not found`);
  rl.prompt();
}).on('close', () => {
  rl.close();
  process.exit(0);
})
