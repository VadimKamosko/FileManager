// const fs = require("fs");
import fs from "fs";

export const create = async (filepath) => {
  fs.open(filepath, "wx+", (err, fd) => {
    if (err) console.log("Error create file");
    else {
      fs.close(fd, (err) => {
        if (err) console.error("Failed to close file", err);
        else {
          console.log("\n> File Closed successfully");
        }
      });
    }
  });
};
