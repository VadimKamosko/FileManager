// const fs = require("fs");
import fs from 'fs'

export const remove = async (filepath) => {
  fs.unlink(filepath, (err) => {
    if (err) console.log("Operation failed");
  });
};
