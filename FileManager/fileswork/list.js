// const { readdir } = require("node:fs/promises");
// const fs = require("fs");

import fs from 'fs'
import { readdir } from 'fs/promises';
export const list = async (path) => {
  try {
    fs.access(path, function (err) {
      if (err && err.code === "ENOENT") {
        console.log("FS operation failed hered");
      }
    });
    const files = await readdir(path, (err) => {
      if (err) console.log("FS operation failed");
    });
    for (const file of files) {
      console.log(file);
    }
  } catch (e) {
    console.log(e);
  }
};
