import fs from "fs";

export const create = async (filepath) => {
  return new Promise((res, rej) => {
    fs.open(filepath, "wx+", (err, fd) => {
      if (err) {
        console.log("Operation failed");
        res();
      } else {
        fs.close(fd, (err) => {
          if (err) console.error("Operation failed");
          else {
            res()
          }
        });
      }
    });
  });
};
