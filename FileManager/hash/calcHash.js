// import fs from "fs";
// import crypto from 'crypto'

// export const calculateHash = async (hashFile) => {
//   try {
//     fs.readFile(hashFile, "utf8", (err, data) => {
//       if (err) throw new Error("Error");
//       let hash = crypto.createHash("sha256",'rsschool').update(data).digest("hex");
//       console.log(hash)
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

import fs from "fs";
import crypto from "crypto";

export const calculateHash = async (hashFile) => {
  return new Promise ((res,rej)=>{

  let ReadStream = new fs.createReadStream(hashFile);

  ReadStream.on("data", (chunk) => {
    let hash = crypto
      .createHash("sha256", "rsschool")
      .update(chunk.toString())
      .digest("hex");
      res(hash)
  });
  ReadStream.on("error", (e) => {
    console.log('Operation error')
  });
})
};
