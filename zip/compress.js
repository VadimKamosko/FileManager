import fs from "fs";
import path from "path";
import { pipeline } from "stream";
import zlib from "zlib";
import { remove } from "../fileswork/delete.js";
export const compress = async (compFilePath, destPath) => {

  let readableStream = fs.createReadStream(compFilePath, { flags: "r+" });

  let filename = path.parse(compFilePath).base;
  let gzfile = filename + ".br";
  let destFilePath = path.join(destPath, gzfile);

  let writeableStream = fs.createWriteStream(destFilePath);

  let gzip = zlib.createBrotliCompress();

  pipeline(readableStream, gzip, writeableStream, (err) => {
    if (err) {
      remove(destFilePath);
      console.log("Operation faild");
    }
  });
};
