import fs from "fs";

export const create = async (filepath) => {
  return new Promise((res, rej) => {
    fs.open(filepath, "wx+", (err, fd) => {
      if (err) {
        console.log("Error create file");
        res();
      } else {
        fs.close(fd, (err) => {
          if (err) console.error("Failed to close file", err);
          else {
            res()
          }
        });
      }
    });
  });
};
