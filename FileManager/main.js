import path from "path";
import { list } from "./fileswork/list.js";
import { read } from "./fileswork/read.js";
import { rename } from "./fileswork/rename.js";
import { copy } from "./fileswork/copy.js";
import { create } from "./fileswork/create.js";
import { remove } from "./fileswork/delete.js";
import { calculateHash as hash } from "./hash/calcHash.js";
import { compress } from "./zip/compress.js";
import { decompress } from "./zip/decompress.js";
import { createPath } from "./createPath.js";
import { osinput } from "./os.js";
import { pathWork } from "./workfithpath.js";

const stdin = process.openStdin();

// let currentDirectory = os.homedir();
// let currentDirectory = "F:\\project\\rss\\FileManager";
// console.log(`You are currently in ${currentDirectory}`);

let username = "mysterious person";
let isRight = false;

if (process.argv[2] == "--username") {
  username = process.argv[3];
}

console.log(`Welcome to the File Manager, ${username}!`);

stdin.on("data", async function (chunk, key) {
  let inputValue = chunk.toString().trim().toLowerCase();
  let answer = await pathWork(inputValue.split(" "));

  if (answer) process.stdout.write(`You are currently in ${answer} \n`);
  else process.stdout.write("Incorrect input \n");

  // if (inputValue.split(" ")[0] == "os") {
  //   osinput(inputValue.split(" ")[1]);
  // }

  // if (inputValue == "ls") list(currentDirectory);

  // if (inputValue == "up") {
  //   currentDirectory = path.parse(currentDirectory).dir;
  //   process.stdout.write(currentDirectory + "\n");
  // }

  // if (inputValue.split(" ")[0] == "cd") {
  //   currentDirectory = await createPath(
  //     inputValue.split(" ")[1],
  //     currentDirectory
  //   );
  //   process.stdout.write(currentDirectory + "\n");
  // }

  // if (inputValue.split(" ")[0] == "cat") {
  //   let pathFile = await createPath(inputValue.split(" ")[1], currentDirectory);
  //   read(pathFile);
  // }

  // if (inputValue.split(" ")[0] == "add") {
  //   if (path.isAbsolute(inputValue.split(" ")[1]))
  //     create(inputValue.split(" ")[1]);
  //   else create(path.join(currentDirectory, inputValue.split(" ")[1]));
  // }

  // if (inputValue.split(" ")[0] == "rn") {
  //   let pathFile = await createPath(inputValue.split(" ")[1], currentDirectory);
  //   rename(pathFile, inputValue.split(" ")[2]);
  // }

  // if (inputValue.split(" ")[0] == "cp") {
  //   let pathFile = await createPath(inputValue.split(" ")[1], currentDirectory);
  //   let pathcpFile = await createPath(
  //     inputValue.split(" ")[2],
  //     currentDirectory
  //   );
  //   copy(pathFile, pathcpFile, false);
  // }

  // if (inputValue.split(" ")[0] == "mv") {
  //   let pathFile = await createPath(inputValue.split(" ")[1], currentDirectory);
  //   let pathcpFile = await createPath(
  //     inputValue.split(" ")[2],
  //     currentDirectory
  //   );
  //   copy(pathFile, pathcpFile, true);
  // }

  // if (inputValue.split(" ")[0] == "rm") {
  //   let pathFile = await createPath(inputValue.split(" ")[1], currentDirectory);
  //   remove(pathFile);
  // }

  // if (inputValue.split(" ")[0] == "hash") {
  //   let pathFile = await createPath(inputValue.split(" ")[1], currentDirectory);
  //   hash(pathFile);
  // }

  // if (inputValue.split(" ")[0] == "compress") {
  //   let pathFile = await createPath(inputValue.split(" ")[1], currentDirectory);
  //   let pathcompressFile = await createPath(
  //     inputValue.split(" ")[2],
  //     currentDirectory
  //   );
  //   compress(pathFile, pathcompressFile);
  // }
  // if (inputValue.split(" ")[0] == "decompress") {
  //   let pathFile = await createPath(inputValue.split(" ")[1], currentDirectory);
  //   let pathcompressFile = await createPath(
  //     inputValue.split(" ")[2],
  //     currentDirectory
  //   );
  //   decompress(pathFile, pathcompressFile);
  // }

  if (inputValue == "exit") process.exit();
  //process.stdout.write('Get Chunk: ' + chunk + '\n');
  // if (key && key.ctrl && key.name == "c") process.exit();
});
process.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${username}!`);
  process.exit();
});
