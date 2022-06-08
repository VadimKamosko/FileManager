import { checkpath } from "./checkPath.js";
import path from "path";
export const createPath = async (newPath, currentDirectory) => {
  if (path.isAbsolute(newPath)) {
    let n = path.normalize(currentDirectory).indexOf(path.normalize(newPath));
    if (n != -1)
      return path.normalize(
        path.join(currentDirectory.substring(0, n), newPath)
      );
    if (path.parse(path.normalize(newPath)).root != "\\") {
      if (await checkpath(newPath)) return newPath;
    }
  } else {
    let tempdir = path.normalize(path.join(currentDirectory, newPath));
    if (await checkpath(tempdir)) return tempdir;
  }
  return currentDirectory;
};
