import { access } from "fs/promises";
export const checkpath = async (path) => {
  try {
    await access(path);
    return true;
  } catch (e) {
    return false;
  }
};
