import os from "os";
export const osinput = async (param) => {
  //   if (param == "--cpus") process.stdout.write(os.cpus().length + "\n");

  //   if (param == "--homedir") process.stdout.write(os.homedir() + "\n");

  //   if (param == "--username")
  //     process.stdout.write(os.userInfo().username + "\n");

  //   if (param == "--architecture") process.stdout.write(os.arch() + "\n");

  //   if (param == "--eol") process.stdout.write(JSON.stringify(os.EOL) + "\n");

  switch (param) {
    case "--cpus":
      process.stdout.write(os.cpus().length + "\n");
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
