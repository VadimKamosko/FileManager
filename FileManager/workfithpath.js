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

let currentDirectory = "F:\\project\\rss\\FileManager";
let Errormsg = "Operation failed";
console.log(`You are currently in ${currentDirectory}`);

export const pathWork = async (param) => {
  let pathFile, pathcpFile, pathcompressFile;
  switch (param[0]) {
    case "cd":
      if (!param[1]) return false;
      if (path.extname(param[1])) return false;
      let checkpath = await createPath(param[1], currentDirectory);
      if (checkpath) currentDirectory = checkpath;
      break;
    case "cat":
      pathFile = await createPath(param[1], currentDirectory);
      if (!pathFile) console.log(Errormsg);
      else console.log(await read(pathFile));
      break;
    case "add":
      if (!param[1]) return false;
      if (path.isAbsolute(param[1])) create(param[1]);
      else create(path.join(currentDirectory, param[1]));
      break;
    case "rn":
      if (!param[2]) return false;
      pathFile = await createPath(param[1], currentDirectory);
      if (!pathFile) console.log(Errormsg);
      else rename(pathFile, param[2]);
      break;
    case "cp":
      pathFile = await createPath(param[1], currentDirectory);
      pathcpFile = await createPath(param[2], currentDirectory);
      if (!pathFile || !pathcpFile) console.log(Errormsg);
      else copy(pathFile, pathcpFile, false);
      break;
    case "mv":
      pathFile = await createPath(param[1], currentDirectory);
      pathcpFile = await createPath(param[2], currentDirectory);
      if (!pathFile || !pathcpFile) console.log(Errormsg);
      else copy(pathFile, pathcpFile, true);
      break;
    case "rm":
      pathFile = await createPath(param[1], currentDirectory);
      if (!pathFile) console.log(Errormsg);
      else remove(pathFile);
      break;
    case "hash":
      pathFile = await createPath(param[1], currentDirectory);
      if (!pathFile) console.log(Errormsg);
      else console.log(await hash(pathFile));
      break;
    case "compress":
      pathFile = await createPath(param[1], currentDirectory);
      pathcompressFile = await createPath(param[2], currentDirectory);
      if (!pathFile || !pathcompressFile) console.log(Errormsg);
      else compress(pathFile, pathcompressFile);
      break;
    case "decompress":
      pathFile = await createPath(param[1], currentDirectory);
      pathcompressFile = await createPath(param[2], currentDirectory);
      if (!pathFile || !pathcompressFile) console.log("Operation faild");
      else decompress(pathFile, pathcompressFile);
      break;
    case "ls":
      await list(currentDirectory);
      break;
    case "up":
      currentDirectory = path.parse(currentDirectory).dir;
      process.stdout.write(currentDirectory + "\n");
      break;
    case "os":
      if (osinput(param[1])) return currentDirectory;
      return false;
    default:
      return false;
  }
  return currentDirectory;
};
