const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});


rl.prompt();

rl.on('line', (answer) => {

  var firstCommand = answer.split(" ")[0];

  switch (firstCommand) {
    case 'exit':
      rl.close();
      process.exit(0);
    default:
      console.log(`${answer}: command not found`);
  }
  rl.prompt();

}).on('close', () => {
  rl.close();
  process.exit(0);
})
