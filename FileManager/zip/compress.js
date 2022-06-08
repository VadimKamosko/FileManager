// import fs from "fs";
// import zlib from "zlib";
// export const compress = async () => {

//   let readableStream = fs.createReadStream(compFilePath);

//   let writeableStream = fs.createWriteStream(archivePath);

//   let gzip = zlib.BrotliCompress();

//   readableStream.pipe(gzip).pipe(writeableStream);
// };

import fs from "fs";
import path from "path";
import zlib from "zlib";
export const compress = async (compFilePath, destPath) => {
  let filename = path.parse(compFilePath).base;
  let gzfile = filename + ".br";
  let destFilePath = path.join(destPath,gzfile)

  let readableStream = fs.createReadStream(compFilePath);

  let writeableStream = fs.createWriteStream(destFilePath);

  let gzip = zlib.createBrotliCompress();

  readableStream.pipe(gzip).pipe(writeableStream);
};
