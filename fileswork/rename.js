import fs from 'fs'
import path, { dirname } from 'path';
export const rename = async (oldName,newName) => {
  try {
    let newPath = path.join(dirname(oldName),newName)
    fs.access(newPath, function (err) {
      if (!err) {
        console.log("No such file'")
      }
      fs.rename(
        oldName,
        newPath,
        (err) => {
          if (err) console.log('Error rename');
        }
      );
    });
  } catch (e) {
    console.log(e);
  }
};

