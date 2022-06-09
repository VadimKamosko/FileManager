import fs from "fs";
import zlib from "zlib";
import path from "path";
import { pipeline } from "stream";
export const decompress = async (archivePath, desPath) => {
  let readableStream = fs.createReadStream(archivePath, { flags: "r+" });
  let fileName = path.parse(archivePath).name;

  readableStream.on("error", (e) => {
    console.log("Error");
  });

  let writeableStream = fs.createWriteStream(path.join(desPath, fileName));

  let gzip = zlib.createBrotliDecompress();

  pipeline(readableStream, gzip, writeableStream, (err) => {
    if (err) {
      remove(destFilePath);
      console.log("Operation faild");
    }
  });
};
