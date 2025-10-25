const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});


rl.prompt();

rl.on('line', (answer) => {

  var firstCommand = answer.split(" ")[0];
  var remainingWords = answer.slice(answer.indexOf(" ") + 1);

  switch (firstCommand) {
    case 'echo':
      console.log(`${remainingWords}`);
      break;
    case 'exit':
      rl.close();
      process.exit(0);
    default:
      console.log(`${answer}: command not found`);
      break;
  }
  rl.prompt();

}).on('close', () => {
  rl.close();
  process.exit(0);
})
