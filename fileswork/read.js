// const { createReadStream } = require("fs");
import { createReadStream } from "fs";

export const read = async (path) => {
  return new Promise((res, rej) => {
    let ReadStreams = createReadStream(path, { flag: "r+" });

    ReadStreams.on("data", (chunk) => {
      res(chunk.toString());
    });
    ReadStreams.on("error", (e) => {
      console.log("operation failed");
    });
  });
};
