import { pathWork } from "./workfithpath.js";
const stdin = process.openStdin();

let username = "unknown user";
if (process.env.npm_config_username) username = process.env.npm_config_username;
else {
  if (process.argv.length == 4) {
    if (process.argv[2] == "--username") {
      username = process.argv[3];
    }
  }
  if (process.argv.length == 3) {
    username = process.argv[2].substring(
      process.argv[2].indexOf("=") + 1,
      process.argv[2].length
    );
  }
}

process.env.username = username;

console.log(`Welcome to the File Manager, ${process.env.username}!`);

stdin.on("data", async function (chunk, key) {
  let inputValue = chunk.toString().trim().toLowerCase();
  if (inputValue) {
    let answer = await pathWork(inputValue.split(" "));
    if (answer) process.stdout.write(`You are currently in ${answer} \n`);
    else process.stdout.write("Incorrect input \n");
  }
});
process.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${process.env.username}!`);
  process.exit();
});
