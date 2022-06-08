// import fs from "fs";
// import zlib from "zlib";
// export const decompress = async () => {

//   let readableStream = fs.createReadStream(archivePath);

//   readableStream.on('error',(e)=>{
//       console.log('Error');
//       process.exit(1);
//   })

//   let writeableStream = fs.createWriteStream(decompFilePath);

//   let gzip = zlib.BrotliDecompress();

//   readableStream.pipe(gzip).pipe(writeableStream);
// };
import fs from "fs";
import zlib from "zlib";
import path from "path";
export const decompress = async (archivePath, desPath) => {
  let fileName = path.parse(archivePath).name;

  let readableStream = fs.createReadStream(archivePath);

  readableStream.on("error", (e) => {
    console.log("Error");
  });

  let writeableStream = fs.createWriteStream(path.join(desPath, fileName));

  let gzip = zlib.createBrotliDecompress();

  readableStream.pipe(gzip).pipe(writeableStream);
};
