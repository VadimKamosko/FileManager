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
