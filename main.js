import { pathWork } from "./workfithpath.js";

const stdin = process.openStdin();

let username = "mysterious person";

if (process.argv[2] == "--username") {
  username = process.argv[3];
}

process.env.username = username

console.log(`Welcome to the File Manager, ${username}!`);

stdin.on("data", async function (chunk, key) {
  let inputValue = chunk.toString().trim().toLowerCase();
  let answer = await pathWork(inputValue.split(" "));

  if (answer) process.stdout.write(`You are currently in ${answer} \n`);
  else process.stdout.write("Incorrect input \n");

});
process.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${process.env.username}!`);
  process.exit();
});
