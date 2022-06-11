import fs from 'fs'
import { readdir } from 'fs/promises';
export const list = async (path) => {
  try {
    fs.access(path, function (err) {
      if (err && err.code === "ENOENT") {
        console.log("Operation failed");
      }
    });
    const files = await readdir(path, (err) => {
      if (err) console.log("Operation failed");
    });
    console.log(files)
  } catch (e) {
    console.log(e);
  }
};
