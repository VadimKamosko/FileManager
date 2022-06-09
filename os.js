import os from "os";
export const osinput = async (param) => {
  switch (param) {
    case "--cpus":
      os.cpus().map(el=>console.log(el))
      break;
    case "--homedir":
      process.stdout.write(os.homedir() + "\n");
      break;
    case "--username":
      process.stdout.write(os.userInfo().username + "\n");
      break;
    case "--architecture":
      process.stdout.write(os.arch() + "\n");
      break;
    case "--eol":
      process.stdout.write(JSON.stringify(os.EOL) + "\n");
      break;
    default:
      process.stdout.write("Incorrect input");
      return false;
  }
  return true;
};
