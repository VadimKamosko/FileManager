import { access, copyFile } from "node:fs/promises";
import { remove } from "./delete.js";
import { constants } from "fs";
import path from "path";

export const copy = async (PathToFile, newPath, isDelete) => {
  try {
    await access(PathToFile);
    let filename = path.parse(PathToFile).base;
    await copyFile(
      PathToFile,
      path.join(newPath, filename),
      constants.COPYFILE_EXCL
    );
    console.log("move");
    if (isDelete) {
      remove(PathToFile);
    }
  } catch (err) {
    console.error("Operation failed");
  }
};
